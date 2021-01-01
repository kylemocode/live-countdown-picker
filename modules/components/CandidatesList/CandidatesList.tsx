import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FixedSizeList as List } from "react-window";

import { S } from './style';
import { candidatesSelector } from '../../../redux/features/candidate/CandidateSlice';
import CandidateItem from './components/CandidateItem';
import CandidateInput from './components/CandidateInput';

export default function CandidatesList() {
  const [innerHeight, setInnerHeight] = useState(700);
  const { candidates } = useSelector(candidatesSelector);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);
  console.log(candidates);
  console.log(innerHeight);
	return (
		<S.ListContainer>
      <S.Title>抽獎名單</S.Title>
      <CandidateInput></CandidateInput>
      {candidates.length ? (
        <List
          className='List'
          height={innerHeight}
          width={500}
          itemCount={candidates.length}
          itemSize={100}
          itemData={candidates} >
          {({ style }) => {
            return <CandidateItem name='' key='' forwardedStyle={style} />
          }}
        </List>
      ) : (
        <S.Warning>目前還沒有任何人參加抽獎喔！</S.Warning>
      )}
    </S.ListContainer>
	)
}
