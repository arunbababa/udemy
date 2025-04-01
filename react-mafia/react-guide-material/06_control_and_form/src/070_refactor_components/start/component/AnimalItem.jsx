const Animal = ({ animal }) => {
    return (
        <li>
            {animal}
            {animal === "Dog" && "★"}
        </li>
    );
    }

export default Animal;