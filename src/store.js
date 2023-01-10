import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './features/timer/timerSlice';
import themeReducer from './features/theme/themeSlice';
import modalReducer from './features/modal/modalSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    theme: themeReducer,
    modal: modalReducer,
  },
});

export default store;
