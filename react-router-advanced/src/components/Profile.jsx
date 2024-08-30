import { Routes, Route, Link } from "react-router-dom";
import ProfileSettings from "./ProfileSettings";
import ProfileDetails from "./ProfileDetails";

function Profile() {
  return (
    <>
      <div>Profile</div>
      <nav>
        <Link to="details">Profile Deets</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </>
  );
}

export default Profile;