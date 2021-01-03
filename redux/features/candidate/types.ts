export type Candidate = {
  name: string,
  key: string,
}

export interface CandidateState {
  candidates: Candidate[];
  loading: boolean;
  winner?: Candidate;
}
