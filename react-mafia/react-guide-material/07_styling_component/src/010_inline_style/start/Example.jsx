import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev); // set関数内のコールバック関数の引数には前回の値が入るんやで

    // これがインリアンスタイルや、コンポーネント内で定義するんやで
    const style = {
        width: 120, // 数値はpxになるめっちゃ楽やん
        height: 60,
        display: "block",
        fontWeight: "bold",
        "border-radius": 9999, // ""で囲めば普通のCSSのように書けるんやで ""つけないでやるとシンタックスエラーや
        cursor: "pointer",
        border: "none",
        margin: "auto",
        backgroundColor: isSelected ? "red" : "blue", // 三項演算子も使えるんやで んで背景色はbackgroundでもbackgroundColorでもいいんやで そしてfalseのところに空文字を入れるとそのプロパティ自体なかったことになるの覚えておこう
    }

    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            <div style={{textAlign:"center"}}>{isSelected && "クリックされました。"}</div>
            {/* ただの論理積や←と思うやん？まず論理積ならbooleanを返すという先入観を捨てろ、ちゃんねん明らかやん上の挙動で */}
            {/* 左辺がfalseならそれを返し、それ以外なら右辺を返すんやで！ */}
        </>
    )
};

export default Example;
