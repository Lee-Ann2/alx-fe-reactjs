import userContext from 'react'
import ProfilePage from "./components/ProfilePage";
import UserDetails from './components/UserDetails';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@gmail.com" };

  return (
    <DataContext.Provider value={userData}>
      <ProfilePage/>
    </DataContext.Provider>
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
