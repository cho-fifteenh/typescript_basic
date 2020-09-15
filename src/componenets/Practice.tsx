import React, { useState } from 'react';

import styled from '@emotion/styled';
import InputCom from '../componenets/InputCom';
import Button from '../componenets/Button';
import CheckBox from './CheckBox';

const Practice = () => {
  return (
    <Container>
      <form>
        <InputCom />
        <Button />
        <CheckBox />
      </form>
    </Container>
  );
};

export default Practice;

const Container = styled.div`
  max-width: 360px;
  margin: auto;
  padding: 100px;
`;
