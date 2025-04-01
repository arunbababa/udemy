const Example = () => {
  const alert = () => {
    window.alert("クリックされました");
  };
  return (
    <>
      <button onClick={alert}>クリックしてね</button>
      <button>クリックしてね</button>
    </>
  );
};

export default Example;
