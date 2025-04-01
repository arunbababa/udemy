import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  const countUp = () => {
    console.log("button clicked");
    // setCountにはしっかりと
    setCount((prev) => {
      // スプレッド構文だ！なぜだなぜこれで治る
      let newState = {...prev};
      newState.val += 1;
      return newState;
    });
  };

  console.log(count.val);
  console.log("rendered");

  return (
      <>
        <p>現在のカウント数: {count.val}</p>
        <button onClick={countUp}>+</button>
      </>
  );
};

export default Example;
