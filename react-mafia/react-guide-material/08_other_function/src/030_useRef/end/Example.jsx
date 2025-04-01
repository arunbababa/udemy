import { useRef, useState } from "react";

const RefExample = () => {

  // useRefとuseStateの準備
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const incrementRef = () => {
    countRef.current += 1;
    console.log("useRefの値: ", countRef.current);
  };

  const incrementState = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>useRef の値: {countRef.current}</p>
      <p>useState の値: {count}</p>
      <button onClick={incrementRef}>useRef の値を増やす</button>
      <button onClick={incrementState}>useState の値を増やす</button>
    </div>
  );
};

export default RefExample;