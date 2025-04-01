import React from "react";
import AnimalItem from "./AnimalItem";
const UlChild = ({ animals }) => {
  if (animals.length === 0) {
    return <h3>アニマルが見つかりませんでした</h3>;
  }
  return (
    <ul>
        {animals
          .map((animal) => {
            return (
              <AnimalItem animal={animal} key={animal}/>
            );
          })}
      </ul>
  );
}

export default UlChild;