import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { AppThunk } from "./../../index"

export interface TimerState {
  timer: number;
  running: boolean;
  IsSetup: boolean;
}

const initialState: TimerState = {
  timer: 0,
  running: false,
  IsSetup: false,
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setRunning: (state, { payload }: PayloadAction<boolean>) => {
      state.running = payload
    },

    setIsSetUp: (state, { payload }: PayloadAction<boolean>) => {
      state.IsSetup = payload
    },

    setTimer: (state, { payload }: PayloadAction<number>) => {
      state.timer = payload
    },
  },
})

export const { setRunning, setIsSetUp, setTimer } = timerSlice.actions

export default timerSlice.reducer

export const timerSelector = (state: { timer: TimerState }) =>
  state.timer