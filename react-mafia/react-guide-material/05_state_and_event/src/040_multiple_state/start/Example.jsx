import { useState } from "react";

const Example = () => {
  const [buttonA, setButtonA] = useState(0);   
  const [buttonB, setButtonB] = useState(10);
  const [buttonC, setButtonC] = useState(100);

  return(
    <>
        <button onClick={() => setButtonA(buttonA + 1)}>Button A: {buttonA}</button>
        <button onClick={() => setButtonB(buttonB + 1)}>Button B: {buttonB}</button>
        <button onClick={() => setButtonC(buttonC + 1)}>Button C: {buttonC}</button>
    </>
  )
};

export default Example;
