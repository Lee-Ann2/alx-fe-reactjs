function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm-400px mx-auto my-20 rounded-lg shadow-lg sm:p-4 max-w-xs md:p-8 max-w-sm lg:p-12 max-w-sm">
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-36 h-36 max-auto sm:w-24 h-24 md:w-36 h-36 lg:w-36 h-36" />
        <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl lg:text-xl">John Doe</h1>
        <p className="text-gray-600 sm:text-sm md:text-base lg:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;