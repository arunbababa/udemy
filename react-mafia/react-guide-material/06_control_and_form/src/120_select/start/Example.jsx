import { useState } from "react";

// POINT プルダウンの実装
const Example = () => {
  const [selected, setSelected] = useState("Banana");
  
  const OPTIONS = ["Apple", "Banana", "Cherry"];
  console.log(OPTIONS.map((fruit) => <option key={fruit} value={fruit}>{fruit}</option>));
  const elements = [
    <div key="1">One</div>,
    <div key="2">Two</div>,
    <div key="3">Three</div>
  ];

  return (
    <>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {OPTIONS.map((fruit) => <option key={fruit} value={fruit}>{fruit}</option>)}
      </select>
      <div>選択された果物：{selected}</div>

      {/* <p>以下は配列がどのように展開されるかの実験だよ</p>
      // {elements} */}
    </>
  );
};

export default Example;
