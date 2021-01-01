import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: flex;
  `,
  InsertInput: styled.input`
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 12px;
    margin-bottom: 16px;
    padding-left: 12px;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  `,
  InsertBtn: styled.div`
    height: 30px;
    color: white;
    border-radius: 6px;
    background: rgb(0, 106, 166);
    padding: 12px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 16px;
  `
}