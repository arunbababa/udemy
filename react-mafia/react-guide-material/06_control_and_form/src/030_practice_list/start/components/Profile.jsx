const Profile = ({ name, age, hobbies }) => {
  return (
    <div>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>
        <div>Hobby:</div>
        <ul>
          {hobbies.map((hobby) => (
          <li key={hobby.key}>{hobby.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
