import { S } from './style';

interface IProps {
  winnerName: string;
}

function WinnerResult({ winnerName }: IProps) {
  
  return (
    <S.Container>
      <S.StyledName>{winnerName}</S.StyledName>
    </S.Container>
  )
}

export default WinnerResult;
