import React, { useState, useEffect, memo, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { FixedSizeList as List, areEqual, ListChildComponentProps } from "react-window";

import { S } from './style';
import { candidatesSelector } from '../../../redux/features/candidate/CandidateSlice';
import { Candidate } from '../../../redux/features/candidate/types';
import CandidateItem from './components/CandidateItem';
import CandidateInput from './components/CandidateInput';

interface IRowProps<T> {
  data: T[];
  index: number;
  style: React.CSSProperties;
}

// Ref: https://github.com/bvaughn/react-window/issues/186#issuecomment-476296940
const Row = memo(({ 
  data, 
  index, 
  style 
}: IRowProps<Candidate>): ReactElement<ListChildComponentProps> => {
  // Data passed to List as 'itemData' is available as props.data 
  return (
    <CandidateItem
      key={data[index].key}
      name={data[index].name} 
      uniqueKey={data[index].key} 
      forwardedStyle={style} />
  );
}, areEqual);

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
        // @ts-ignore
        <List
          className='List'
          height={innerHeight - 120}
          width={500}
          itemCount={candidates.length}
          itemSize={80}
          itemData={candidates} >
          {Row}
        </List>
      ) : (
        <S.Warning>目前還沒有任何人參加抽獎喔！</S.Warning>
      )}
    </S.ListContainer>
	)
}
