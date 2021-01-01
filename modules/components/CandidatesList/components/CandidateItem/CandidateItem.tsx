import React from 'react';

import { S } from './style';

interface IProps {
  forwardedStyle: React.CSSProperties;
  name: string;
  key: string;
}

export default function CandidateItem({ forwardedStyle, name, key }: IProps) {

  return (
    <S.ListItemContainer style={forwardedStyle}>
      <S.StyledImage
        src='https://i.imgur.com/LFZhvOx.jpg'
        alt='person'
      />
      <S.ListItemName>
        {name}
        <S.DeleteBtn>X</S.DeleteBtn>
      </S.ListItemName>
    </S.ListItemContainer>
  )
}
