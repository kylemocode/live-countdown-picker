import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { S } from './style';
import { timerSelector, reduceOneSecond, clearTimer } from '../../../../../redux/features/timer/TimerSlice';
import { pickWinner } from '../../../../../redux/features/candidate/CandidateSlice';
import { calculateTimeLeft } from '../../../../../utils/calculateTimeLeft';

export default function Countdown() {
  const dispatch = useDispatch();
  const { timer, isSetup, running  } = useSelector(timerSelector);
  const [timeleft, setTimeleft] = useState<{ minutes: string, seconds: string }>(calculateTimeLeft(timer * 60));
  const initialRenderRef = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    if (timeoutRef.current && timer === 0) {
      clearInterval(timeoutRef.current);
      dispatch(clearTimer());
      dispatch(pickWinner());
    }

    setTimeleft(calculateTimeLeft(timer));
  }, [timer]);

  useEffect(() => {
    if (!running) return;
    timeoutRef.current = setInterval(() => {
      dispatch(reduceOneSecond());
    }, 1000);

    return () => clearInterval(timeoutRef.current);
  }, [running]);

  return (
    <S.NumberText turnRed={isSetup && timeleft.minutes === '00' && parseInt(timeleft.seconds) <= 10}>
      {!isSetup && '00:00'}
      {isSetup && `${timeleft.minutes}:${timeleft.seconds}`}
    </S.NumberText>
  )
}
