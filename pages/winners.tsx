import Link from 'next/link';

import { fetchWinners } from '../redux/features/winners/asyncActions';
import WinnerItem from '../modules/components/WinnerItem';
import { S } from '../modules/components/WinnerItem/style';
import { WinnerObj } from '../redux/features/winners/types';

interface IProps {
  winnersProps: WinnerObj[];
  error: boolean;
  loading: boolean;
}
export default function Winner({ winnersProps, loading, error }: IProps) {

  return (
    <div>
      <Link href='/'>
        <S.StyledLink>回首頁</S.StyledLink>
      </Link>
      {loading && <h1>loading...</h1>}
      {error && <h1>error</h1>}
      <S.ItemContainer>
        {winnersProps && winnersProps?.map((winner, idx) => {
          return (
            <WinnerItem 
              winnerName={winner.winnerName} 
              key={`${winner.winnerName}-${idx}`}
            />
          )
        })}
      </S.ItemContainer>
    </div>
  )
}

Winner.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchWinners());
  const { winners: { winners, loading, error } } = await store.getState();

  return { winnersProps: winners.winners, loading, error };
}