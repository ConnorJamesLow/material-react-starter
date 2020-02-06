import { createReducer, createAction } from '@reduxjs/toolkit';
import { grey, brown, blueGrey, red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange } from '@material-ui/core/colors';
import { Color } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

export const setPrimary = createAction<Color, 'set-primary'>('set-primary');
export const setSecondary = createAction<Color, 'set-secondary'>('set-secondary');

// Just for fun, I threw all the colors in material-ui into this object so we can toggle themes later.
const initial = {
  palette: {
    primary: amber,
    secondary: grey,
  } as PaletteOptions,
  options: {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    blueGrey,
    grey,
    brown
  }
};

export default createReducer(initial, builder => builder
  .addCase(setPrimary, (state, { payload: color }) => {
    state.palette.primary = color;
  })
  .addCase(setSecondary, (state, { payload: color }) => {
    state.palette.secondary = color;
  })
);