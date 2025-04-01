// ESmoduleのimport文、./を忘れてはあかんよ忘れてはあかんよ
import "./Example.css";

// もし以下のようにやるとパッケージ参照の意味になり、node_modulesから探すことになる
// import "Example.css";

const Example = () => {
  return (
    <div className="component">
      <h3>Hello component</h3>
    </div>
  );
};

export default Example;
