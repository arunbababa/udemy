import { useState } from 'react';

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(numArray);

  const shuffle = () => {
    const shuffledArray = [...num];
    const lastValue = shuffledArray.pop();
    shuffledArray.unshift(lastValue);
    setNum(shuffledArray);
  }
  return (
    <>
      <h3>{num}</h3>
      <button onClick={shuffle}>シャッフル！</button>
    </>
  );
};

export default Example;
