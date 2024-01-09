import { useContext} from "react";
import Person from "./Person";
import { Context as PersonContext } from "../../services/Context";

const PersonList = () => {
  const { phonebooks } = useContext(PersonContext);

  return (
    <div>
      {phonebooks.map((person) => (
        <Person key={person.id} {...{ person }} />
      ))}
    </div>
  );
};

export default PersonList;
