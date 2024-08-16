import UserContext from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";
import UserDetails from './components/UserDetails';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@gmail.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage/>
    </UserContext.Provider>
  );
}

function ProfilePage() {
  return (
    <UserDetails/>
  );
}

function UserDetails() {
  const userData = useContext(DataContext);

  return (
    <div>{userData}</div>
  );
}
export default App
