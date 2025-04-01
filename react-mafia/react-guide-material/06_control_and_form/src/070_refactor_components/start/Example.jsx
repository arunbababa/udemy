import { useState } from "react";
import UlChild from "./component/UlChild";
import AnimalFilter from "./component/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  })
  
  return (
    <>
    <ul>
      <AnimalFilter
        filterState={[filterVal, setFilterVal]}
      />
      <UlChild animals={filterdAnimals}/>
    </ul>
    </>
  );
};

export default Example;
