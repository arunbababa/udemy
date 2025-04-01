import { useState } from "react";
import "./Example.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button className={isSelected ? "btn selected" : "btn"} onClick={clickHandler}>
      {/* これでも可能→<button className={`btn ${isSlected ? selected:""}`} onClick={clickHandler}> */}
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;


// この章のポイント 外部CSS読み込み形式ではコンポーネントごとにCSSを読み込むことができない、調整できない、上書きされてしまう
// 他のコンポで使われているCSSのクラス名と競合するとあとからの方が優先されてしまうのだ！
