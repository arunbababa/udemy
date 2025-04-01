import React, { useReducer, useState } from 'react';

const Example = () => {

  const [count, setCount] = useState(0);
  const [rstate,dispatch] = useReducer
  ((prev) => ++prev , 10);

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  }

  const clickRCount= () => {
    dispatch({type: 'increment'});
  }

  return (
    <>
      <div>
        <h3>stateの方ボタンを押すと1追加されるよ</h3>
        <button onClick={onClickCount}>+</button>
        <p>Count: {count}</p>
      </div>
      <div>
        <h3>rstateの方ボタンを押すと1追加されるよ</h3>
        <button onClick={clickRCount}>+</button>
        <p>Count: {rstate}</p>
      </div>
    </>
  );
};

export default Example;
