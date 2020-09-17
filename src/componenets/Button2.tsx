import css from '@emotion/css';
import styled from '@emotion/styled';

interface ButtonInput {
  //선택속성으로 btnStyle 생략가능
  btnStyle?: string;
}

//내부에 style 넣음........?
const Button2 = styled.button<ButtonInput>`
  margin-top: 10px;
  width: 100%;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  background-color: #39718a;
  padding: 16px 0;
  border: 0;
  &:disabled {
    background-color: #989898;
  }

  ${({ btnStyle }) =>
    btnStyle === 'black' &&
    css`
      background-color: #333;
    `}
  ${({ btnStyle }) =>
    btnStyle === 'outline' &&
    css`
      background: none;
      color: #39718a;
      border: 1px solid #39718a;
    `}
`;
export default Button2;
