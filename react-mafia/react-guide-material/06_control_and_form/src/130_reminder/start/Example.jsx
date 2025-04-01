import { useState } from "react";

const Example = () => {

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const setInputValue = (e) => {
    setInput(e.target.value);
  }
  const addTask = () => {
    setTasks([...tasks, input]);
    setInput('');
  }
  const doneTask = (e) => {
    setTasks(tasks.filter((task) => task !== e.target.value));
  }

  return (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <h1>Reminder</h1>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={setInputValue} value={input}/>
        <button onClick={addTask}>addTask</button>
      </form>
    </div>
  );
};

export default Example;
