import {useImperativeHandle } from "react";
import { useRef, forwardRef } from "react";

/* POINT forwardRef
子コンポーネント内の DOM に直接アクセスしたいときに使います。
refは、親から子コンポーネントへprops形式で渡して参照するということができないため、
参照したい場合は子コンポーネント内でfowardRefを使用する必要があります。
*/
const Input = forwardRef((props, ref) => {
  
  const inputRef = useRef();

  // これ良くわからんけどまぁ密結合になるから辞めておこう
  useImperativeHandle(ref, () => ({
    Myfocus(){
      inputRef.current.focus();
    }
  }));


  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.Myfocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
