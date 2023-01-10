import { createSelector } from '@reduxjs/toolkit';

const selectTimers = state => state.timer;

export const selectTimer = createSelector(selectTimers, items =>
  items.find(item => item.isSelected === true)
);
