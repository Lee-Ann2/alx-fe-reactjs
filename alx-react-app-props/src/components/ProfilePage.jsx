import { useContext } from "react";
import UserContext from './components/UserContext';
import UserInfo from './UserInfo';

function ProfilePage({userData}) {
    const { name, age, bio } = useContext(UserContext);
    return (
        <UserInfo userData={userData} />
    );
}

export default ProfilePage;