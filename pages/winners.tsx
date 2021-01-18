import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchWinners } from '../redux/features/winners/asyncActions';
import { winnersSelector } from '../redux/features/winners/WinnerSlice';

export default function Winner() {
  const dispatch = useDispatch();
  const { winners, loading, error } = useSelector(winnersSelector);

  useEffect(() => {
    dispatch(fetchWinners());
  },[]);
  console.log('winners ', winners);
  console.log('loading ', loading);
  console.log('error ', error);

  return (
    <div>
      {loading && <h1>loading...</h1>}
      {error && <h1>error</h1>}
      {!loading && winners && winners.winners.map((winner, idx) => {
        return <p>{winner.winnerName}</p>
      })}
    </div>
  )
}
