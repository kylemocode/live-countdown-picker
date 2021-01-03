import styled from 'styled-components';

import { InputStyle, ButtonStyle } from '../../../styles';

export const S = {
  Wrapper: styled.div`
    display: flex;
  `,
  InsertInput: styled.input`
    ${InputStyle};
  `,
  InsertBtn: styled.div`
    ${ButtonStyle};
  `
}
