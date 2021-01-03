import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import candidatesReducer from './features/candidate/CandidateSlice';
import timerReducer from './features/timer/TimerSlice';

const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
    timer: timerReducer,
  },
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'development' ? false : true,
});

export default store;
