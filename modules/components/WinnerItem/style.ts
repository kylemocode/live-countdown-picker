import styled from 'styled-components';

import { ButtonStyle } from '../styles';

export const S = {
  Container: styled.div`
    width: 150px;
    padding: 0px 10px;
    border: solid 3px black;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  StyledName: styled.p`
    color: black;
  `,
  StyledLink: styled.div`
    ${ButtonStyle};
    width: 150px;
    background: black;
    color: white;

    ${props => props.theme.tablet`
      width: 120px;
      margin-bottom: 5px;
      margin-top: 5px;
    `}
  `,
}