import React from 'react';
import styled from '@emotion/styled';
import InputCom from '../componenets/InputCom';
// import Button1 from '../componenets/Button1';
import Button2 from '../componenets/Button2';
import CheckBox from './CheckBox';

const Practice = () => {
  return (
    <Container>
      <form>
        <InputCom placeholder="비밀번호를 입력해주세요!!!" />
        {/* <Button1 buttonText="버튼"></Button1> */}
        <Button2 btnStyle="black">버튼 2-1</Button2>
        <Button2>버튼 2-2</Button2>
        <Button2 btnStyle="outline">버튼 2-3</Button2>
        <CheckBox name="checkBox1" id="test" />
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
