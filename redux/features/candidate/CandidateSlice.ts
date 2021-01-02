import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CandidateState, Candidate } from './types';

const initialState: CandidateState = {
  candidates: [],
  loading: false,
  errors: '',
  winner: undefined,
}

const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    addCandidate: (state, { payload }: PayloadAction<Candidate>) => {
      state.candidates.push(payload)
    },
    removeCandidate: (state, { payload }: PayloadAction<string>) => {
      state.candidates = state.candidates.filter(item => item.key !== payload);
    }
  },
})

export const { addCandidate, removeCandidate } = candidateSlice.actions;

export default candidateSlice.reducer;

export const candidatesSelector = (state: { candidates: CandidateState }) =>
  state.candidates;
