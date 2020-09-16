import React, { useState } from 'react';
import styled from '@emotion/styled';

interface InputType {
  placeholder: string;
}

const InputCom = ({ placeholder }: InputType) => {
  const [passwordShow, setPasswordShow]: any = useState(false);
  const [inputText, setInputText]: any = useState();

  const passwordToggle = () => {
    setPasswordShow(passwordShow ? false : true);
  };
  const onChangeInput = (e: any) => {
    setInputText(e.target.value);
  };
  const passwordReset = () => {
    setInputText('');
  };

  return (
    <InputBox>
      <InputTitle>비밀번호</InputTitle>
      <Input
        placeholder={placeholder}
        type={passwordShow ? 'text' : 'password'}
        value={inputText || ''}
        onChange={onChangeInput}
      />
      <ImgBox>
        <img
          src={require('../assets/images/btn_x.png')}
          alt="password reset"
          css={{ marginRight: '8px' }}
          onClick={passwordReset}
        />
        <img
          src={require('../assets/images/pw_view.png')}
          alt="password eye"
          onClick={passwordToggle}
        />
      </ImgBox>
    </InputBox>
  );
};

export default InputCom;

const InputTitle = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 17px 14px;
  border: 1px solid rgba(33, 36, 59, 0.3);
  box-sizing: border-box;
`;

const InputBox = styled.div`
  position: relative;
  margin-bottom: 15px;
`;
const ImgBox = styled.p`
  position: absolute;
  bottom: 15px;
  right: 14px;
  display: flex;
  align-items: center;
`;
