import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import candidatesReducer from './features/candidate/CandidateSlice';
import timerReducer from './features/timer/TimerSlice';
import winnersReducer from './features/winners/WinnerSlice';

const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
    timer: timerReducer,
    winners: winnersReducer,
  },
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'development' ? false : true,
});

export default store;
