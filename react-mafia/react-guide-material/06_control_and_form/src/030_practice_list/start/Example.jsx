import Profile from "./components/Profile";

const Example = () => {
  return (
    <>
      <ul>
        <Profile name="Geo" age="18" hobbies={[
          {key:1, name:"movie"},
          {key:2, name:"music"}
        ]
        }/>
        <Profile name="Tom" age="25" hobbies={[
          {key:1, name:"reading"},
          {key:2, name:"game"}
        ]}/>
        <Profile name="Lisa" age="21" hobbies={[
          {key:1, name:"shopping"},
          {key:2, name:"travel"}
        ]}/>
      </ul>
    </>
  );
};

export default Example;
