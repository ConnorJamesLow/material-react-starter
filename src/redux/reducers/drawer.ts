import { createReducer, createAction } from '@reduxjs/toolkit';

// definitions
export type drawerOptions = { open: boolean };

// actions
export const toggleDrawer = createAction<null, 'toggle-drawer'>('toggle-drawer');

export default createReducer<drawerOptions>({ open: false }, builder => builder
  .addCase(toggleDrawer, (state) => { state.open = !state.open; })
);
