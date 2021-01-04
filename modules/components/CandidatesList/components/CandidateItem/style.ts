import styled from 'styled-components';

export const S = {
  ListItemContainer: styled.div`
    height: 60px;
    display: flex;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.01);
    }

    ${props => props.theme.tablet`
      width: 100%;
    `}
  `,
  StyledImage: styled.img`
    width: 60px;
    height: 60px;
  `,
  ListItemName: styled.div`
    position: relative;
    background: white;
    height: 60px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    ${props => props.theme.tablet`
      width: calc(100vw - 100px);
    `}
  `,
  DeleteBtn: styled.div`
    position: absolute;
    right: 0;
    top: 0;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;
  `
}
