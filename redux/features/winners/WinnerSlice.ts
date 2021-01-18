import { createSlice } from '@reduxjs/toolkit';

import { fetchWinners, recordWinners } from './asyncActions';
import { WinnersState } from './types';

const initialState: WinnersState = {
  winners: { winners: []},
  loading: false,
  error: false,
}

const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWinners.fulfilled, (state, action) => {
      state.winners = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchWinners.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWinners.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(recordWinners.fulfilled, (state, action) => {
      state.winners.winners.push(action.payload);
    });
  },
});

export default winnersSlice.reducer;

export const winnersSelector = (state: { winners: WinnersState }) =>
  state.winners;
