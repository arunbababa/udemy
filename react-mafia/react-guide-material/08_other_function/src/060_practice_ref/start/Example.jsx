import { useState, useRef, forwardRef, useImperativeHandle } from "react";

// やったけどほぼ前の章見ながらとあとcopilotのおかげクソが

const Video = forwardRef(({ path }, ref) => {

  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play(){
      console.log("子供のplay");
      videoRef.current.play();
    },
    stop(){
      console.log("子供のstop");
      videoRef.current.pause();
    }
  }));

  return (
    <video style={{ maxWidth: "100%" }} ref={videoRef}>
      <source src={path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(false);

  const ref = useRef();

  return (
    <div>
      <h3>練習問題</h3>
      <p>useRef、useImperativeHandle、forwardRefを使って完成系の動画再生機能を作成してください。※useImperativeHandleでplay(再生)、stop(停止)メソッドを定義すること。
</p>
      <Video ref={ref} path="./sample.mp4" />
      <button
        onClick={() => {
          if (playing) {
            ref.current.stop();
          } else {
            ref.current.play();
          }
          setPlaying(!playing);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
