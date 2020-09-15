import styled from '@emotion/styled';
import React from 'react';

//interface로 type 설정
interface State {
  buttonDisabled: boolean;
}

//state 기본값 만들기
const initialState: State = {
  buttonDisabled: false,
};

const Button = () => {
  return (
    <>
      <ButtonInput disabled={initialState.buttonDisabled}>로그인</ButtonInput>
      <ButtonInput>회원가입</ButtonInput>
      <ButtonInput>카카오냥</ButtonInput>
    </>
  );
};

export default Button;

const ButtonInput = styled.button`
  margin-top: 10px;
  width: 100%;
  color: #fff;
  font-weight: bold;
  background-color: #2e581a;
  padding: 16px 0;
  border: 0;
  &:disabled {
    background-color: #989898;
  }
`;
