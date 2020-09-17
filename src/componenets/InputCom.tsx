import React, { useState } from 'react';
import styled from '@emotion/styled';

interface InputType {
  placeholder: string;
}

const InputCom = ({ placeholder }: InputType) => {
  const [passwordShow, setPasswordShow]: any = useState(false);
  const [inputText, setInputText]: any = useState();
  // useState에 typing 하는 방법은 [...]: any가 아닌 useState<type>(); 으로 해주시면 됩니다.
  // ex) const [inputText, setInputText] = useState<string>('');
  // + string으로 지정하면 초기값을 무조건 ''으로 설정해주셔야 합니다.
  // ex) const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const passwordToggle = () => {
    setPasswordShow(passwordShow ? false : true);
    // useState 두번째 인자인 setState에서는 첫번째 인자 값을 받아와서 사용하는게 아닌, setState(prevState => !prevState)처럼 인자로 받아오셔서 사용하시면 됩니다.
    // ex) setPasswordShow(prevState => !prevState)
  };
  const onChangeInput = (e: any) => {
    // event는 ChangeEventHandler<HTMLInputElement> 타입을 사용합니다. (리액트 기본 내장 타입)
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
      <ImgBox style={{ display: `${inputText ? 'block' : 'none'}` }}>
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
