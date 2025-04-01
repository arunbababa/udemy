import { useState , useRef} from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef1 = useRef();
  // const inputRef2 = useRef("2");

  console.log(inputRef1);
  // console.log(inputRef2);

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <h3>ユースケース1</h3>
        <input type="text" ref={inputRef1} value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick = {() => inputRef1.current.focus()}>
          インプット要素をフォーカスする
        </button>
      </div>

      {/* <div>
        <h3>ユースケース3 個人的なuseRef実験</h3>
        <p id="useRef2" ref={inputRef2}>これがuseRef2だにょ</p>
      </div> */}
    </>
    
  );
};

const Case2 = () => {
  // const [value, setValue] = useState("");
  // const inputRef = useRef();

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();
  console.log(videoRef);

  return (
    <>
      <div>
        <video style={{ width: "100%" }} ref={videoRef}>
          <source src="./sample.mp4"></source>
        </video>
          <button onClick={() => {
            if (playing) {
              videoRef.current.pause();
              console.log("pause");
            } else {
              videoRef.current.play();
              console.log("play");
            }
            setPlaying((prev) => !prev);
          }}>
            {playing ? "一時停止" : "再生"}
            </button>
      </div>
    </>
  );
}

const createTimeStamp = () => new Date().getTime();

const Case3 = () => {

  const [value, setValue] = useState(createTimeStamp());
  const inputRef = useRef(createTimeStamp());

  const updateRefTime = () => {
    console.log("updateRef");
    inputRef.current = createTimeStamp();
    console.log("ref timecount -> ",inputRef.current);
  };

  const updateStateValue = () => {
    console.log("updateState");
    setValue(createTimeStamp());
    // 以下の分ここに書いちゃうとあかん、少し待たなあかんせめてこの関数の外やな
    // console.log("ref timecount -> ",value);
  }

  console.log("ref timecount -> ",value);

  return (
    <div>
      {/* <h3>ユースケース3</h3>
        <div id="useState" style={{ marginBottom: "20px" }}>
          <input type="text" ref={inputRef} value={value}/>
          <button onClick={setValue(() => createTimeStamp())}>更新</button>
        </div> */}
        <div id="useState">
          <p>state:{value}</p>
          <button onClick={updateStateValue}>更新</button>
        </div>
        <div id="useRef">
          <p>ref:{inputRef.current}</p>
          <button onClick={updateRefTime}>更新</button>
        </div>
    </div>
  );
}

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
      <Case3 />
    </>
  );
};

export default Example;
