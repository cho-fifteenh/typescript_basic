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
        {/* Input 컴포넌트를 어싸인 해드렸었는데 이건 컴포넌트가 아니라 그냥 뷰입니다. */}
        {/* Input State를 페이지에서 관리할 수 있는 컴포넌트를 만들어보셔야해요 ㅠㅠㅠㅠ */}
        {/* <Button1 buttonText="버튼"></Button1> */}
        <Button2 btnStyle="black">버튼 2-1</Button2>
        <Button2>버튼 2-2</Button2>
        <Button2 btnStyle="outline">버튼 2-3</Button2>
        <CheckBox name="checkBox1" id="test" />
        {/* 체크박스 children에 label 내용을 넣어보는 연습을 해보셔야 할 것 같습니다.  */}
        {/* Input 컴포넌트와 마찬가지로 State를 페이지에서 관리할 수 있는 컴포넌트를 만들어주세요  */}
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
