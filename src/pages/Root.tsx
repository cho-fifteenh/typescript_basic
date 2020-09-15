import React from 'react';
import Greeting from '../componenets/Greeting';

const Root: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  };

  return <Greeting name="hello" onClick={onClick} />;
};

export default Root;
