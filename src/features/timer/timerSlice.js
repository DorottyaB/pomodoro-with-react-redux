import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'pomodoro',
    value: 25,
  },
  {
    id: 2,
    name: 'short break',
    value: 5,
  },
  {
    id: 3,
    name: 'long break',
    value: 15,
  },
];

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    increment(state, action) {
      const id = action.payload;
      console.log(id);
    },
    decrement(state, action) {
      const id = action.payload;
      console.log(id);
    },
  },
});

export const { increment, decrement } = timerSlice.actions;
export default timerSlice.reducer;
