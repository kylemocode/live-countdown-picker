import styled from 'styled-components';

import { InputStyle, ButtonStyle } from '../../../styles';

export const S = {
  Wrapper: styled.div`
    display: flex;

    ${props => props.theme.tablet`
      flex-direction: column;
    `}
  `,
  InsertInput: styled.input`
    ${InputStyle};

    ${props => props.theme.tablet`
      width: 100%;
    `}
  `,
  InsertBtn: styled.div`
    ${ButtonStyle};

    ${props => props.theme.tablet`
      margin: 0 0 10px 0;
    `}
  `
}
