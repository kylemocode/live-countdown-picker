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
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload
    },

    setCandidates: (state, { payload }: PayloadAction<Candidate[]>) => {
      state.candidates = payload
    },
  },
})

export const { setLoading, setErrors, setCandidates } = candidateSlice.actions;

export default candidateSlice.reducer;

export const candidatesSelector = (state: { candidates: CandidateState }) =>
  state.candidates;
