import { createReducer, createAction } from '@reduxjs/toolkit';

// Define some common constructs
export interface User {
  username: string,
  isLoggedIn: boolean
}

// Initial values
const defaultUser: User = {
  username: '',
  isLoggedIn: false
};

// Actions to connect dispatches to reducer cases.
export const login = createAction<User, 'login'>('login');
export const logout = createAction<User, 'logout'>('logout');

// Create the reducer (uh-durrr).
export default createReducer<User>(defaultUser, builder => builder
  .addCase(login, (state, action) => ({
    username: action.payload.username,
    isLoggedIn: true
  }))
  .addCase(logout, () => defaultUser)
);
