import React from 'react';
import { useDispatch } from 'react-redux';

import { S } from './style';
import { removeCandidate } from '../../../../../redux/features/candidate/CandidateSlice';

interface IProps {
  forwardedStyle: React.CSSProperties;
  name: string;
  uniqueKey: string;
}

function CandidateItem({ forwardedStyle, name, uniqueKey }: IProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeCandidate(uniqueKey));
  }

  return (
    <S.ListItemContainer style={forwardedStyle}>
      <S.StyledImage
        src='/person.jpg'
        alt='person'
      />
      <S.ListItemName>
        {name}
        <S.DeleteBtn onClick={handleDelete}>X</S.DeleteBtn>
      </S.ListItemName>
    </S.ListItemContainer>
  )
}

export default React.memo(CandidateItem);
