import type { Collection, Db } from "npm:mongodb";
import { freshID } from "@utils/database.ts";
import type { Empty, ID } from "@utils/types.ts";

const PREFIX = "Sessioning" + ".";

export type User = ID;
export type Session = ID;

interface SessionDoc {
  _id: Session;
  user: User;
  created: Date;
  expires: Date;
}

/**
 * concept Sessioning [User]
 *
 * purpose: manage user sessions for authentication
 * principle: after logging in, a user receives a session token that can be used to authenticate subsequent requests
 */
export default class SessioningConcept {
  sessions: Collection<SessionDoc>;

  constructor(private readonly db: Db) {
    this.sessions = this.db.collection(PREFIX + "sessions");
    // Create TTL index to auto-delete expired sessions
    this.sessions.createIndex({ expires: 1 }, { expireAfterSeconds: 0 });
  }

  /**
   * createSession (user: User): (session: Session)
   *
   * **requires** user exists
   *
   * **effects** creates a new session for the user, returns session ID
   */
  async createSession({
    user,
  }: {
    user: User;
  }): Promise<{ session: Session } | { error: string }> {
    if (!user) {
      return { error: "User ID must be provided." };
    }

    const sessionId = freshID();
    const now = new Date();
    const expires = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const newSession: SessionDoc = {
      _id: sessionId,
      user,
      created: now,
      expires,
    };

    await this.sessions.insertOne(newSession);

    return { session: sessionId }; // Return object for sync engine
  }

  /**
   * deleteSession (session: Session): Empty
   *
   * **requires** session exists
   *
   * **effects** removes the session
   */
  async deleteSession({
    session,
  }: {
    session: Session;
  }): Promise<Empty | { error: string }> {
    const result = await this.sessions.deleteOne({ _id: session });
    if (result.deletedCount === 0) {
      return { error: "Session not found." };
    }
    return {}; // Return object for sync engine
  }

  /**
   * _getUser (session: Session): (user: User)
   *
   * **requires** session exists and is not expired
   *
   * **effects** returns the user associated with the session
   */
  async _getUser({
    session,
  }: {
    session: Session;
  }): Promise<Array<{ user: User }> | Array<{ error: string }>> {
    console.log("🔧 _getUser called with session:", session);
    if (!session) {
      return [{ error: "Session ID must be provided." }];
    }

    const sessionDoc = await this.sessions.findOne({
      _id: session,
      expires: { $gt: new Date() }, // Check not expired
    });

    if (!sessionDoc) {
      console.log("❌ _getUser - Session not found or expired");
      return [{ error: "Session not found or expired." }];
    }

    console.log("✅ _getUser - Found user:", sessionDoc.user);
    return [{ user: sessionDoc.user }];
  }

  /**
   * _refreshSession (session: Session): Empty
   *
   * **requires** session exists
   *
   * **effects** extends the expiration time of the session
   */
  async _refreshSession({
    session,
  }: {
    session: Session;
  }): Promise<Empty[] | Array<{ error: string }>> {
    const newExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now

    const result = await this.sessions.updateOne(
      { _id: session },
      { $set: { expires: newExpires } },
    );

    if (result.matchedCount === 0) {
      return [{ error: "Session not found." }];
    }

    return [{}]; // Return array for sync engine
  }
}
