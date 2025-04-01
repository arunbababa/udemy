import "./Child.css";

const Child = () => {
  return (
    // fragmentに属性はアウト、ただkeyだけいける、ループとかでよく使うやつねmapとかの
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h2>Hello Fragment</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla illo consequatur quasi, eum provident, placeat praesentium quos hic repudiandae perferendis ut delectus aut ipsa. Reprehenderit, maxime tenetur. Error, iure.</p>
    </>

      );
};

export default Child;
