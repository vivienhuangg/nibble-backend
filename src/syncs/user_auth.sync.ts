// src/syncs/user_auth.sync.ts

import { Requesting, Sessioning, User } from "@concepts";
import { actions, type Sync } from "@engine";

// ==============================================================================
// NOTE: Registration syncs removed - /api/User/registerUser is a PASSTHROUGH
// ==============================================================================
// Registration is configured as INCLUDED in passthrough.ts because it's a
// public action that doesn't need authentication. Requests go directly to
// User.registerUser without syncs.
//
// POST /api/User/registerUser → User.registerUser (direct passthrough)

// ==============================================================================
// Login Synchronizations
// ==============================================================================
// Login is EXCLUDED from passthrough because we need to create a session
// after successful login. The sync orchestrates: login → create session → respond

/**
 * LoginRequest
 *
 * **when**
 *   Requesting.request (path: "/users/login", username, password) : (request)
 *
 * **then**
 *   User.login (username, password)
 *
 * Catches an incoming HTTP request for user login and triggers the User concept's login action.
 */
export const LoginRequest: Sync = ({ request, username, password }) => ({
  when: actions([
    Requesting.request,
    { path: "/User/login", username, password },
    { request },
  ]),
  then: actions([User.login, { username, password }]),
});

/**
 * LoginResponseSuccess
 *
 * **when**
 *   Requesting.request (path: "/users/login") : (request)
 *   User.login () : (user)
 *
 * **then**
 *   Sessioning.createSession (user)
 *
 * After successful login, create a session for the user.
 */
export const CreateSessionAfterLogin: Sync = ({ user }) => ({
  when: actions(
    [Requesting.request, { path: "/User/login" }, {}],
    [User.login, {}, { user }],
  ),
  then: actions([Sessioning.createSession, { user }]),
});

/**
 * LoginResponseWithSession
 *
 * **when**
 *   Requesting.request (path: "/users/login") : (request)
 *   User.login () : (user)
 *   Sessioning.createSession () : (session)
 *
 * **then**
 *   Requesting.respond (request, user, session)
 *
 * Responds to the original HTTP request with the user ID and session token.
 */
export const LoginResponseWithSession: Sync = ({
  request,
  user,
  session,
}) => ({
  when: actions(
    [Requesting.request, { path: "/User/login" }, { request }],
    [User.login, {}, { user }],
    [Sessioning.createSession, {}, { session }],
  ),
  then: actions([Requesting.respond, { request, user, session }]),
});

/**
 * LoginResponseError
 *
 * **when**
 *   Requesting.request (path: "/users/login") : (request)
 *   User.login () : (error)
 *
 * **then**
 *   Requesting.respond (request, error)
 *
 * Responds to the original HTTP request if the login failed.
 */
export const LoginResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/User/login" }, { request }],
    [User.login, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// ==============================================================================
// NOTE: Logout syncs removed - logout is handled via PASSTHROUGH
// ==============================================================================
// Logout doesn't need syncs - clients can directly call:
// POST /api/Sessioning/deleteSession { session }
//
// This is a simple passthrough that destroys the session. No orchestration needed.
