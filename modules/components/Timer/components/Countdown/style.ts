import styled, { css } from 'styled-components';

export const S = {
  NumberText: styled.div<{turnRed: boolean}>`
    color: #71f05d;
    font-size: 110px;
    font-weight: 600px;

    ${props => props.turnRed && css`
      color: #eb4034;
    `}
  `
}
