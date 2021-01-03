import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { S } from './style';
import Countdown from '../Countdown';
import { setTimer, clearTimer, timerSelector, runTimer } from '../../../../../redux/features/timer/TimerSlice';
import { candidatesSelector, cleanCandidates, pickWinner } from '../../../../../redux/features/candidate/CandidateSlice';

export default function TimeSetter() {
  const dispatch = useDispatch();
  const { isSetup, running } = useSelector(timerSelector);
  const { candidates } = useSelector(candidatesSelector);
  const [timerValue, setTimerValue] = useState(0);

  const handleSetTimer = () => {
    if (timerValue < 1 || timerValue > 500) return alert('請輸入 1-500 範圍的數字');
    dispatch(setTimer(timerValue * 60));
  };

  const handleResetTimer = useCallback(() => {
    dispatch(cleanCandidates());
    dispatch(clearTimer());
  }, []);

  const handleStartTimer = () => {
    if (!isSetup) return alert('請先設定倒數時間');
    if (candidates.length < 2) return alert('沒有 2 個以上抽獎者不能開始倒數啦!')
    if (running) return alert('正在倒數啦，請耐心等待');
    dispatch(runTimer());
  };

  const handleInstantPick = () => {
    if (!running) return alert('需要開始倒數才能使用此功能啦!');
    dispatch(pickWinner());
    dispatch(clearTimer());
  }

  return (
    <S.Container>
      <S.Title>抽獎時間</S.Title>
      <S.SetterWrapper>
        <div>
          <S.StyledInput 
            type='number'
            value={timerValue}
            onChange={e => setTimerValue(parseInt(e.target.value))}/>
          <S.Minute>分鐘</S.Minute>
        </div>
        <S.SetBtn onClick={handleSetTimer}>設定</S.SetBtn>
        <S.ResetBtn onClick={handleResetTimer}>重設</S.ResetBtn>
        <S.StartBtn onClick={handleStartTimer}>開始</S.StartBtn>
        <S.InstantBtn onClick={handleInstantPick}>立刻抽獎</S.InstantBtn>
      </S.SetterWrapper>
      <S.CountdownWrapper>
        <Countdown />
      </S.CountdownWrapper>
    </S.Container>
  )
}
