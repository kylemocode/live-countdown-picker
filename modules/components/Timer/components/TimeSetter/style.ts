import styled from 'styled-components';

import { InputStyle, ButtonStyle } from '../../../styles';

export const S = {
  Title: styled.div`
    color: black;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  `,
  StyledInput: styled.input`
    ${InputStyle};
    border: solid 2px #8a8987;
    width: 180px;
  `,
  SetBtn: styled.div`
    ${ButtonStyle};
    width: 70px;
    background: #5ce06b;
  `,
  ResetBtn: styled.div`
    ${ButtonStyle};
    width: 70px;
    background: #e33969;
  `,
  StartBtn: styled.div`
    ${ButtonStyle};
    width: 70px;
    background: #4287f5;
  `,
  InstantBtn: styled.div`
    ${ButtonStyle};
    width: 100px;
    background: #f0e056;
  `,
  SetterWrapper: styled.div`
    display: flex;
  `,
  Minute: styled.span`
    margin-left: 5px;
  `,
  Container: styled.div`
    padding: 40px;
    max-width: 50%;
  `,
  CountdownWrapper: styled.div`
    margin-top: 30px;
  `
}