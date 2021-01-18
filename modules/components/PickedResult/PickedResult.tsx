import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { S } from './style';
import { winnerSelector } from '../../../redux/features/candidate/CandidateSlice';
import { recordWinners } from '../../../redux/features/winners/asyncActions';

function PickedResult() {
  const dispatch = useDispatch();
  const winner = useSelector(winnerSelector);

  useEffect(() => {
    if (!winner) return;

    dispatch(recordWinners(winner?.name))
  }, [winner])

  return (
    <S.Container>
      <S.Title>抽獎結果</S.Title>
      {winner ? (
        <S.ResultWrapper>
          <S.ResultImage src='/person.jpg'/>
          <S.WinnerName>{winner?.name}...94 尼啦！</S.WinnerName>
        </S.ResultWrapper>
      ) : (
        <>
          <S.Waiting>再等等...還沒開獎啦！</S.Waiting>
          <S.WaitingWrapper>
            <S.AnimatedBall />
            <S.AnimatedBall />
            <S.AnimatedBall />
          </S.WaitingWrapper>
        </>
      )}
    </S.Container>
  )
}

export default PickedResult;