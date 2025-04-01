import { use,useEffect,useState } from "react";

const Example = () => {

    const [time,setTime] = useState(0);

    useEffect(() => {
      console.log('useEffectが呼ばれるよ');
      window.setInterval(() => {
      setTime((prev) => prev + 1);
    }
    , 1000);
    },[]);
    // この空配列なんだ？
    // 分かった！この配列にぶち込んだ値が変わるとuseEffectが呼ばれるようになるんだね！
    // ちなみにsetintervalは実行し続ける関数やで

    useEffect(() => {
      console.log("updated: ", time);
    },[time]);

    useEffect(() => {
      document.title =  `time: ${time}`;
      window.localStorage.setItem('time-key',time);
    },[time]);

  return(  
    <>
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    </>
  )
  };

  export default Example;
