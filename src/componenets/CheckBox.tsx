import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import uncheck from '../assets/images/uncheck.png';
import check from '../assets/images/check.png';

interface CheckBoxInter {
  name: string;
  id: string;
  onChange?: any;
}

const CheckBox = ({ name, onChange, id }: CheckBoxInter) => {
  const [checked, setChecked] = useState();

  useEffect(() => {
    if (onChange) {
      onChange(checked);
    }
  }, [checked]);

  return (
    <CheckBoxDiv>
      <Input
        type="checkbox"
        name={name}
        checked={checked || false}
        id={id}
        onChange={(e: any) => {
          setChecked(e.target.checked);
        }}
      ></Input>
      <InputLabel htmlFor={id}></InputLabel>
      <CheckBoxText>#######체크박스#######</CheckBoxText>
    </CheckBoxDiv>
  );
};

export default CheckBox;

const CheckBoxDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  display: none;

  &:checked + label {
    background: url(${check}) no-repeat;
    background-size: 100%;
  }
`;
const InputLabel = styled.label`
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: url(${uncheck}) no-repeat;
  background-size: 100%;
  margin-right: 8px;
`;
const CheckBoxText = styled.p`
  font-size: 12px;
`;
