import { useRef, forwardRef } from "react";


// const InputRef = ({inputref}) => {
//   return (
//     <input type="text" ref={inputref} />
//   );
// 


  // forwardRef関数を使うと、親コンポーネントから子コンポーネントのref属性にrefオブジェクトを渡すことができます。
  // んで引数関係よくわかんと思うからconsole.logで確認してな
  const InputRef = forwardRef((props,ref) => {
    console.log("props -> ",props);
    console.log("ref -> ",ref);
    return (
      <input type="text" ref={ref} />
    );
  });

const Example = () => {
  const ref = useRef();
  return (
    <>
      {/* ref属性でpropsリレーする際は最後の子コンポーネントでしかガチのrefは使わないようにしよね！ */}
      <InputRef ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
