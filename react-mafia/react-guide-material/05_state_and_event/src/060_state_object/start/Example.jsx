
import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const onChangeName = (e) => {
    setPerson({ ...person, name: e.target.value });
  }
  const onChangeAge = (e) => {
    setPerson({ ...person, age: e.target.value });
  }
  return(
    <>
      <div className="info">
        <p>Name:{person.name}</p>
        <p>Age:{person.age}</p>
      </div>

      <div className="input">
        <input type="text" onChange={onChangeName} value={person.name}/>
        <input type="number" onChange={onChangeAge} value={person.age}/>
        <button>リセット</button>
      </div>
    </>
  )
};

export default Example;

// 以下コードは自分で書いてみたやつオブジェクトのstate管理じゃないけどね
// 行けるがなんかエラー出るから見てみなさい
// const [personName, setPersonName] = useState("");
//   const [personAge, setPersonAge] = useState("");
//   const [inputName, setInputName] = useState("");
//   const [inputAge, setInputAge] = useState("");
//   const onChangeName = (e) => {
//     setInputName(e.target.value);
//     setPersonName(e.target.value);
//   }
//   const onChangeAge = (e) => {
//     setInputAge(e.target.value);
//     setPersonAge(e.target.value);
//   }
//   const onClickReset = () => {
//     setPersonName("");
//     setPersonAge("");
//     setInputName("");
//     setInputAge("");
//   }

//   return(
//     <>
//       <div className="info">
//         <h2>Name:{personName}</h2>
//         <h2>Age:{personAge}</h2>
//       </div>
//       <div className="input">
//         <input type="text" onChange={(e) => onChangeName(e)} value={inputName}/>
//         <input type="text" onChange={(e) => onChangeAge(e)} value={inputAge}/>
//       </div>
//       <button onClick={onClickReset}>リセット</button>
//     </>
//   )
// };