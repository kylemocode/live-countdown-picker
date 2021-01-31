import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { S } from './style';
import Countdown from '../Countdown';
import { setTimer, clearTimer, timerSelector, runTimer } from '../../../../../redux/features/timer/TimerSlice';
import { candidatesSelector, cleanCandidates, pickWinner } from '../../../../../redux/features/candidate/CandidateSlice';

export default function TimeSetter() {
  const dispatch = useDispatch();
  const { isSetup, running } = useSelector(timerSelector);
  const { candidates } = useSelector(candidatesSelector);
  const [timerValue, setTimerValue] = useState(0);

  const handleSetTimer = useCallback(() => {
    if (timerValue < 1 || timerValue > 500) return alert('請輸入 1-500 範圍的數字');
    dispatch(setTimer(timerValue * 60));
  }, [timerValue, dispatch, setTimer]);

  const handleResetTimer = useCallback(() => {
    dispatch(clearTimer());
    dispatch(cleanCandidates());
  }, []);

  const handleStartTimer = useCallback(() => {
    if (!isSetup) return alert('請先設定倒數時間');
    if (candidates.length < 2) return alert('沒有 2 個以上抽獎者不能開始倒數啦!')
    if (running) return alert('正在倒數啦，請耐心等待');
    dispatch(runTimer());
  }, [isSetup, candidates, running]);

  const handleInstantPick = useCallback(() => {
    dispatch(pickWinner());
    if (running) dispatch(clearTimer());
  }, [running]);

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
        <S.BtnWrapper>
          <S.SetBtn onClick={handleSetTimer}>設定</S.SetBtn>
          <S.ResetBtn onClick={handleResetTimer}>重設</S.ResetBtn>
          <S.StartBtn onClick={handleStartTimer}>開始</S.StartBtn>
          <S.InstantBtn onClick={handleInstantPick}>立刻抽獎</S.InstantBtn>
          <Link href='/winners'>
            <S.StyledLink>中獎者列表</S.StyledLink>
          </Link>
        </S.BtnWrapper>
      </S.SetterWrapper>
      <S.CountdownWrapper>
        <Countdown />
      </S.CountdownWrapper>
    </S.Container>
  )
}
