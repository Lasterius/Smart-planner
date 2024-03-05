import { createSlice } from '@reduxjs/toolkit';
import { burgerState } from './types';

const initialState: burgerState = {
  isOpen: false,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    switchOpen: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { switchOpen } = burgerSlice.actions;
export default burgerSlice.reducer;
