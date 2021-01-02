import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import { S } from './style';
import { addCandidate } from '../../../../../redux/features/candidate/CandidateSlice';

export default function CandidateInput() {
  const dispatch = useDispatch();
  const [candidateName, setCandidateName] = useState('');

  const handleInsert = () => {
    if (candidateName === '') return alert('請輸入抽獎人名稱！');
    dispatch(addCandidate({ name: candidateName, key: uuid() }));
    setCandidateName('');
  };

  return (
    <S.Wrapper>
      <S.InsertInput
        placeholder='請輸入抽獎人名稱'
        type='text' 
        value={candidateName} 
        onChange={(e) => setCandidateName(e.target.value)}/>
      <S.InsertBtn onClick={handleInsert}>新增</S.InsertBtn>
    </S.Wrapper>
  )
}
