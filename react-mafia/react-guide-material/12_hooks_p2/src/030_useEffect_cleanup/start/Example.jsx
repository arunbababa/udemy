import { useEffect, useState } from "react";

const Example = () => {

  const [isDisp,setIsDisp] = useState(true);

  return (
    <>
    {isDisp && <Timer />}
    <button onClick={() => setIsDisp(prev => !prev) }>トグル</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = null;
    intervalId = window.setInterval(() => {
      console.log('interval called');
      setTime(prev => prev + 1);
    }, 1000);
    return () => {
      // debugger
      // ここでclearIntervalを呼び出すことで、useEffectのクリーンアップ処理を行うことができる
      window.clearInterval(intervalId)
      console.log('updated end');
    }
  }, [])
  // あーuseeffectの戻り値というのはクリーンアップ関数だったのかマフィアわかりずら過ぎるな
  
  useEffect(() => {
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time)
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
