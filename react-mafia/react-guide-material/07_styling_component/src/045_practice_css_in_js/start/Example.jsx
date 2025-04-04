import styled from "styled-components";

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: none;
  background-color: pink;
`;

// styledの引数にコンポーネントを渡すことで、そのコンポーネントを継承した新しいコンポーネントを作成できる、続けてテンプレートリテラルを使ってスタイルを記述する
const SecondButton = styled(FirstButton)`
  background-color: red;
  color: white;
`;

const ThirdButton = styled(SecondButton)`
  background-color:${(props) => props.color === "dark"  ? "black" : "green"};
`;

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードと同じ状態になるようにしてください。
        <ul>
          <li>Q1. FirstButtonのbackgroudをpinkにしてください。</li>
          <li>
            Q2.
            FirstButtonを継承したSecondButtonを作成し、backgroudをredに、colorをwhiteにしてください。{" "}
          </li>
          <li>
            Q3.
            SecondButtonを継承したThirdButtonを作成し、props.darkがある場合のみbackgroudがblackに、ない場合はgreenになるようにしてください。
          </li>
        </ul>
      </p>
      <FirstButton>ボタン1</FirstButton>
      <SecondButton>ボタン2</SecondButton>
      <ThirdButton color={"dark"}>ボタン3</ThirdButton>
    </>
  );
};

export default Example;
