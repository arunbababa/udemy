import Child from "./components/Child";

const Example = () => {
    const fn = () => {
        return "Hello Props";
    }
    const o = {
        color: "red",
        num: 123,
    }
    return (
        <>
        {/* boolをいろいろいじるとおもろいよtrueとfalseの切り替わり覚えやすい */}
            <Child {...o} fn={fn} bool={2} obj={{name:"arunba",age:22}}/>
            {/* <Child color="blue"/>;
            <Child color="green"/>; */}
        </>
    );
}

export default Example;
