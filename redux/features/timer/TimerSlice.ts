import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

import { TimerState } from './types';

const initialState: TimerState = {
  timer: 0,
  running: false,
  isSetup: false,
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state, { payload }: PayloadAction<number>) => {
      state.isSetup = true;
      state.timer = payload;
    },
    runTimer: (state) => {
      state.running = true;  
    },
    clearTimer: (state) => {
      state.isSetup = false;
      state.running = false;
      state.timer = 0;
    },
    reduceOneSecond: (state) => {
      state.timer -= 1;
    }
  },
});

export const { setTimer, runTimer, clearTimer, reduceOneSecond } = timerSlice.actions;

export default timerSlice.reducer;

const timerSelectorOrigin = (state: { timer: TimerState }) =>
  state.timer;

export const timerSelector = createSelector(
  timerSelectorOrigin,
  timer => timer
)
