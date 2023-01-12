import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './features/timer/timerSlice';
import themeReducer from './features/theme/themeSlice';
import modalReducer from './features/modal/modalSlice';
import { settingsMiddleware, reHydrateStore } from './middlewares/settingsMiddleware';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    theme: themeReducer,
    modal: modalReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(settingsMiddleware),
});

export default store;
