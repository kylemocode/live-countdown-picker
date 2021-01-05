import styled from 'styled-components';

export const S = {
  ListContainer: styled.div`
    background: rgba(0, 0, 0, 0.55);
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    height: 100vh;
    padding: 0 12px;

    ${props => props.theme.tablet`
      position: relative;
      width: 100%;
      height: 110vh;
      padding: 20px 20px 0 20px;
      overflow: hidden;
    `}
  `,
  Title: styled.h3`
    color: white;
    font-size: 22px;
    font-weight: 500;
  `,
  Warning: styled.p`
    color: white;
    font-size: 18px;
  `,
  CountSpan: styled.span`
    color: white;
    font-size: 14px;
    margin-left: 5px;
  `
}