import React from 'react';
import styled from '@emotion/styled';

const CheckBox = () => {
  return (
    <CheckBoxDiv>
      <Input type="checkbox"></Input>
      <InputLabel></InputLabel>
      <CheckBoxText>#######체크박스#######</CheckBoxText>
    </CheckBoxDiv>
  );
};

export default CheckBox;

const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input``;
const InputLabel = styled.label`
  width: 15px;
  height: 15px;
  cusor: pointer;
`;
const CheckBoxText = styled.p`
  font-size: 12px;
`;
