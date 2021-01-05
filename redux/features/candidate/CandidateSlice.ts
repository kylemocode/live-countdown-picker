import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

import { CandidateState, Candidate } from './types';

const initialState: CandidateState = {
  candidates: [],
  loading: false,
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
    },
    pickWinner: (state) => {
      if (state.winner) return;
      if (state.candidates.length === 0) return;
      state.winner = state.candidates[Math.floor(Math.random() * state.candidates.length)];
      state.candidates = [];
    },
    cleanWinner: (state) => {
      state.winner = undefined;
    },
    cleanCandidates: (state) => {
      state.candidates = [];
    }
  },
})

export const { addCandidate, removeCandidate, pickWinner, cleanWinner, cleanCandidates } = candidateSlice.actions;

export default candidateSlice.reducer;

const candidatesSelectorOrigin = (state: { candidates: CandidateState }) =>
  state.candidates;

export const candidatesSelector = createSelector(
  candidatesSelectorOrigin,
  candidates => candidates
)
