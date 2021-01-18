export interface WinnersState {
  winners: WinnerAPIResponse;
  loading: boolean;
  error: boolean;
}

export type WinnerObj = {
  id: number,
  createdAt: string,
  winnerName: string,
}
export interface WinnerAPIResponse {
  winners: WinnerObj[];
}
