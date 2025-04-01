import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  console.log("ちょっと待ったinputValue",inputValue);

  // 例えばだけど以下を上のhandleInputに入れると、多分inputValuenの更新が遅くて動かないな
  const filteredAnimals = animals.filter((animal) => {
    return animal.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <>    
      <h3>配列のフィルター</h3>
      <input type="text" onChange={handleInput}/>
      <ul>
        {filteredAnimals.map((animal) => (
          <li>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
