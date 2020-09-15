import React from 'react';

import styled from '@emotion/styled';

const InputCom = () => {
  return (
    <InputBox>
      <InputTitle>비밀번호</InputTitle>
      <Input placeholder="비밀번호를 입력하세요." type="password" />
      <ImgBox>
        <img
          src={require('../assets/images/btn_x.png')}
          css={{ marginRight: '8px' }}
        />
        <img src={require('../assets/images/pw_view.png')} />
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
