import { useState } from "react";
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filterdName, setFilterdName] = useState("");
  const filterName = (e) => {
    setFilterdName(e.target.value);
  }
  const filteredPersons = persons.filter((person) =>{
    return person.name.toLowerCase().includes(filterdName.toLowerCase())
  })

  return (
    <>
      <input type="text" onChange={filterName}/>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
