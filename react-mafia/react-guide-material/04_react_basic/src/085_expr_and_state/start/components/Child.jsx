/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = () => {
  const a = true ? "true1":"false1";
  return (
    <div className="component">
      <h3>式と文</h3>
      {/* 参考演算子は式なのでjsx内で使えるのだ */}
      {/* ちゃんと言うとjsxで使えるのは式ね、文はダメ */}
      {false ? 1+1:0}
    </div>
  );
};

export default Child;
