import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import { fetchWinners } from '../redux/features/winners/asyncActions';
import { winnersSelector } from '../redux/features/winners/WinnerSlice';
import WinnerItem from '../modules/components/WinnerItem';
import { S } from '../modules/components/WinnerItem/style';

export default function Winner() {
  const dispatch = useDispatch();
  const { winners, loading, error } = useSelector(winnersSelector);

  useEffect(() => {
    dispatch(fetchWinners());
  },[]);

  return (
    <div>
      <Link href='/'>
        <S.StyledLink>回首頁</S.StyledLink>
      </Link>
      {loading && <h1>loading...</h1>}
      {error && <h1>error</h1>}
      {!loading && winners && winners.winners?.map((winner, idx) => {
        return (
          <WinnerItem 
            winnerName={winner.winnerName} 
            key={`${winner.winnerName}-${idx}`}
          />
        )
      })}
    </div>
  )
}
