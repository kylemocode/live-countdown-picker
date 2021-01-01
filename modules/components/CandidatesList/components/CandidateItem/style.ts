import styled from 'styled-components';

export const S = {
  ListItemContainer: styled.div`
    height: 80px;
    display: flex;
    border-radius: 12px;
  `,
  StyledImage: styled.img`
    width: 80px;
    height: 80px;
  `,
  ListItemName: styled.div`
    position: relative;
    background: white;
    width: 80%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
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
