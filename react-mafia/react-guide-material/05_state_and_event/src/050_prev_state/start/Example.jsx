import { useState } from "react";

const Example = () => {
    const [val, setVal] = useState(0);
    
    return(
        <>
            <p>現在のカウント数：{val}</p>
            <button onClick={() => setVal(val+1)}>+</button>
            <button onClick={() => setVal(val-1)}>-</button>
        </> 
    )
};

export default Example;
