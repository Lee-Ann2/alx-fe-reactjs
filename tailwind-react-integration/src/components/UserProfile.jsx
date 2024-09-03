function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm-400px mx-auto my-20 rounded-lg shadow-lg sm:p-4 sm:max-w-xs md:p-8 md:max-w-sm lg:p-12 lg:max-w-sm hover:shadow-xl">
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-36 h-36 max-auto sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-36 lg:h-36 hover:scale-110 transition-transform duration-300 ease-in-out" />
        <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl lg:text-xl hover:text-blue-500">John Doe</h1>
        <p className="text-gray-600 sm:text-sm md:text-base lg:text-base hover:text-gray-900">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;