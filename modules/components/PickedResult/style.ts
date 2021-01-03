import styled, { keyframes } from 'styled-components';

const scaleAnimation = keyframes`
  from {
    transform: scale(0.4);
  }

  to {
    transform: scale(1.0);
  }
`;

export const S = {
  Title: styled.div`
    color: black;
    font-size: 24px;
    font-weight: 500;
  `,
  Container: styled.div`
    padding: 40px;
  `,
  Waiting: styled.div`
    color: #878485;
    font-size: 20px;
    font-weight: 500;
    margin-top: 30px;
  `,
  AnimatedBall: styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #02487a;
    animation: ${scaleAnimation} 1s linear infinite;
    animation-direction: alternate;
    margin-left: 10px;

    &:nth-child(2){
      animation-delay: 0.2s;
    }
    &:nth-child(3){
      animation-delay: 0.4s;
    }
  `,
  WaitingWrapper: styled.div`
    display: flex;
    margin-top: 10px;
  `,
  ResultWrapper: styled.div`
    margin-top: 20px;
  `,
  ResultImage: styled.img`
    width: 120px;
    height: 120px;
    border-radius: 10px;
  `,
  WinnerName: styled.div`
    font-size: 32px;
  `
}
