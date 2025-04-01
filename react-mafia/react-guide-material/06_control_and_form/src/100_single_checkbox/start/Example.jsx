import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);
  // このsetIsChecksの中身は値を入れる？なんだこれprevの使い方が全然わからんな
  const onChangeCheck = () => setIsChecked(true);
  return (
    <>
      <label htmlFor="">チェック！</label>
        <input 
        type="checkbox" 
        checked={isChecked}
        onChange={onChangeCheck}
        />
        <div>{isChecked ? "ON!" : "OFF!"}</div>
    </>
  );
};

export default Example;
