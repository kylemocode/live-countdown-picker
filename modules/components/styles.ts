import { css } from 'styled-components';

export const InputStyle = css`
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
`

export const ButtonStyle = css`
  min-height: 30px;
  max-height: 40px;
  color: white;
  border-radius: 6px;
  background: rgb(0, 106, 166);
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 16px;
`;
