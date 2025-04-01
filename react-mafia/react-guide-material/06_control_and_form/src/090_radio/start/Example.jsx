import { useState } from "react";

const Example = () => {

  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry","すもももももももものうち"];
  const [fruit, setFruit] = useState("Apple");
  const onChangeFruit = (e) => setFruit(e.target.value);
  return (
    <>
      {RADIO_COLLECTION.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChangeFruit}
            />
            {value}
          </label>
        );
      })}
      <h3>私は{fruit}がたべたい</h3>
    </>
  );
};

export default Example;
