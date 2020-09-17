import React from 'react';
import Practice from '../componenets/Practice';

// import Greeting from '../componenets/Greeting';

// const Root: React.FC = () => {
//   const onClick = (name: string) => {
//     console.log(`${name} say hello`);
//   };

//   return <Greeting name="hello" onClick={onClick} />;
// };

const Root: React.FC = () => {
  // 컴포넌트 하나만 렌더링 되는 경우에는 컴포넌트 안에 있는 내용을 페이지로 빼서 렌더링 해주세요.
  // 컴포넌트를 나누실 때에는 반복이 여러번 되는 구조거나 여러 페이지에서 사용할 때에만 나누시면 됩니다.
  return <Practice />;
};

export default Root;
