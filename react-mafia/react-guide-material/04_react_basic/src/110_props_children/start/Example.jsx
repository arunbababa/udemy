import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  console.log({...profile[0]});
  return (
    <div>
      <Container title="Childrenとは？" >
        {/* この下propsがスプレッド構文で渡せるのがちょい疑問だなまぁprops渡したときそれはオブジェクトだからオブジェクトで渡せるのも普通科ぁ？的な理解だな今は */}
        {/* あとコンポーネントの閉じタグ用意してその間に置いたものはchildrenとして使えるのだ特別なpropsね */}
        <Profile {...profile[0]}/>
        <Profile {...profile[1]}/>
      </Container>
    </div>
  );
};

export default Example;
