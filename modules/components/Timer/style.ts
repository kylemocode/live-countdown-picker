import styled from 'styled-components';
import { CenterStyle } from '../styles';

export const S = {
  TimerWrapper: styled.div`
    min-height: 350px;

    ${props => props.theme.tablet`
      ${CenterStyle};
    `}
  `
}
