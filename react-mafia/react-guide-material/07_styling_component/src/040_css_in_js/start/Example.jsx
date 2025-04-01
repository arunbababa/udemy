import { useState } from "react";
import styled from "styled-components";

console.dir(styled);
// dirはオブジェクトをjSON形式で表示する
// logはオブジェクトをHTML形式で表示する

// 以下タグ付きテンプレートという記法
// styled.buttonはstyled-componentsのbuttonコンポーネントを返す
const StyeldButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${( props ) => props.isSelected ? "hotpink" : ""};
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyeldButton isSelected={isSelected} onClick={clickHandler}>
        ボタン
      </StyeldButton>

      <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
