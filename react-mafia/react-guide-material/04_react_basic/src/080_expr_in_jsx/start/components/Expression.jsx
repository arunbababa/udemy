import "./Expression.css"

const Expression = () => {
    const name = "John";
    const title = "EXPRESSION";
    const arry = ["item1", "item2", "item3"];
    const hello = (arg) => `hello ${arg}`;

    return (
        <div className={title.toLocaleLowerCase()}> 
            <h3>hello {name}</h3>
            <h3>{arry}</h3>
            <h3>{hello("arunba")}</h3>
            <h3>{/* これは画面上に表示されない*/}</h3>
            {/* 以下の感じでも行けるjsx内にタグを設置、なんでいけんねんこれ良くわからんな TODO */}
            {<h3>hello {name}</h3>}
        </div>
    );
}

export default Expression;