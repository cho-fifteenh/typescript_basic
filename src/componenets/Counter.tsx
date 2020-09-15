import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // useState를 사용할 때 Generice를 사용하지 않아도 알아서 타입 유추 가능 하므로 생략 가능
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
