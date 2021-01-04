import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import { S } from './style';
import { addCandidate, cleanWinner, candidatesSelector } from '../../../../../redux/features/candidate/CandidateSlice';

export default function CandidateInput() {
  const dispatch = useDispatch();
  const { candidates, winner } = useSelector(candidatesSelector);
  const [candidateName, setCandidateName] = useState('');

  const handleInsert = () => {
    if (candidateName === '') return alert('請輸入抽獎人名稱！');
    if (candidates.length === 0 && winner !== undefined) dispatch(cleanWinner());
    if (candidates.some(candidate => candidate.name === candidateName)) return alert('這個抽獎名已經報名過囉！')
    dispatch(addCandidate({ name: candidateName, key: uuid() }));
    setCandidateName('');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleInsert();
    }
  }

  return (
    <S.Wrapper>
      <S.InsertInput
        placeholder='請輸入抽獎人名稱'
        type='text' 
        value={candidateName} 
        onChange={(e) => setCandidateName(e.target.value)}
        onKeyPress={handleEnter}/>
      <S.InsertBtn onClick={handleInsert}>新增</S.InsertBtn>
    </S.Wrapper>
  )
}
