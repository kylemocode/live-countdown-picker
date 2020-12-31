import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { AppThunk } from "./../../index"

export interface CandidateState {
  candidates: object[];
  loading: boolean;
  errors: string;
}

const initialState: CandidateState = {
  candidates: [],
  loading: false,
  errors: '',
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

    setCandidates: (state, { payload }: PayloadAction<object[]>) => {
      state.candidates = payload
    },
  },
})

export const { setLoading, setErrors, setCandidates } = candidateSlice.actions

export default candidateSlice.reducer

export const candidatesSelector = (state: { candidates: CandidateState }) =>
  state.candidates
