import { increment, decrement, setSeconds } from '../features/timer/timerSlice';

export const settingsMiddleware = store => next => action => {
  if (increment.match(action) || decrement.match(action) || setSeconds.match(action)) {
    const state = store.getState();
    const data = { ...state, modal: { isOpen: false } };
    localStorage.setItem('settings', JSON.stringify(data));
  }
  return next(action);
};

export const reHydrateStore = () => {
  if (localStorage.getItem('settings') !== null) {
    return JSON.parse(localStorage.getItem('settings'));
  }
};
