import { useSelector } from 'react-redux';

import { S } from './style';
import { candidatesSelector } from '../../../redux/features/candidate/CandidateSlice';

export default function PickedResult() {
  const { winner } = useSelector(candidatesSelector);

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