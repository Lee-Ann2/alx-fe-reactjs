import { useContext } from "react";
import UserContext from './components/UserContext';
const UserProfile = (props) => {
    return (
      const { name, age, bio } = useContext(UserContext);
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
};
export default UserProfile;