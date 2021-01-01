import { configureStore } from '@reduxjs/toolkit';

import candidatesReducer from './features/candidate/CandidateSlice';
import timerReducer from './features/timer/TimerSlice';

const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
    timer: timerReducer,
  },
  middleware: [],
  devTools: process.env.NODE_ENV !== 'development' ? false : true,
});

export default store;
