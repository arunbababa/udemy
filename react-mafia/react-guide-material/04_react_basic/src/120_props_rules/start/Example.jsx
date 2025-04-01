// POINT propsの流れは一方通行
// POINT propsは読み取り専用
import React from "react"

import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  const babe = (
    <div>
      <h3>Bye</h3>
    </div>
  )
  console.log(
    React.createElement("h1", {
      className: "greeting"
    }, "hello world")
  );
  return (
    <>
      <Hello p="hello"/>
      <Bye />
    </>
  );
};

export default Example;
