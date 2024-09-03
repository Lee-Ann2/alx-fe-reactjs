function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm-400px max-auto my-20 rounded-lg shadow-lg">
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-36 h-36 max-auto" />
        <h1 className="text-x1 text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;