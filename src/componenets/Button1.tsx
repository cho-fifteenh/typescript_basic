import styled from '@emotion/styled';
import { css } from '@emotion/core';
import React from 'react';

type BtnType = {
  btnType?: string;
  buttonText?: string;
};

const Button1 = ({ btnType, buttonText }: BtnType) => {
  return (
    <button css={btnType}>
      {/* <button css={[base, outline]}> line 버튼3 </button> */}
      {buttonText}
    </button>
  );
};

export default Button1;

const base = css`
  width: 100%;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  padding: 16px 0;
  background: #333;
  color: #fff;
  font-weight: bold;
`;

const blue = css`
  background: #39718a;
`;

const outline = css`
  background: none;
  border: 1px solid #39718a;
  color: #39718a;
`;
