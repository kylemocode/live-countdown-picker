import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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

	return (
		<S.ListContainer>
      <S.Title>
        抽獎名單
        {candidates.length ? <S.CountSpan>(目前參加人數： {candidates.length} 人)</S.CountSpan> : null}
      </S.Title>
      <CandidateInput></CandidateInput>
      {candidates.length ? (
        <List
          className='List'
          height={innerHeight}
          width={500}
          itemCount={candidates.length}
          itemSize={100}
          itemData={candidates} >
          {({ index, style }) => {
            return (
              <CandidateItem
                name={candidates[index].name} 
                uniqueKey={candidates[index].key} 
                forwardedStyle={style} />
            )
          }}
        </List>
      ) : (
        <S.Warning>目前還沒有任何人參加抽獎喔！</S.Warning>
      )}
    </S.ListContainer>
	)
}
