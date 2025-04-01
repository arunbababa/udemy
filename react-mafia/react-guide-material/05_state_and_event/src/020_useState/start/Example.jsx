import { useState } from "react";

const Example = () => {

  const [input,setInput] = useState('');
  return (
    <>
      <label htmlFor="">
        <input type="text" 
          onChange={(e) => setInput(e.target.value)}
        />
        ={input}
      </label>
    </>
  );
};

export default Example;
