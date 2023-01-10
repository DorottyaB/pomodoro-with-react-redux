import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seconds: 1500,
  modes: [
    {
      id: 1,
      name: 'pomodoro',
      value: 25,
      isSelected: true,
    },
    {
      id: 2,
      name: 'short break',
      value: 5,
      isSelected: false,
    },
    {
      id: 3,
      name: 'long break',
      value: 15,
      isSelected: false,
    },
  ],
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    increment(state, action) {
      const id = action.payload;
      const item = state.modes.find(item => item.id === id);
      item.value = item.value + 1;
    },
    decrement(state, action) {
      const id = action.payload;
      const item = state.modes.find(item => item.id === id);
      if (item.value === 0) {
        return;
      }
      item.value = item.value - 1;
    },
    setSeconds(state, action) {
      const name = action.payload;
      const selectedTimer = state.modes.find(item => item.name === name);
      const minutesToSeconds = selectedTimer.value * 60;
      state.seconds = minutesToSeconds;
    },
  },
});

export const { increment, decrement, setSeconds } = timerSlice.actions;
export default timerSlice.reducer;
