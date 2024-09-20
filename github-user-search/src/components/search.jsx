const API_URL = 'https://api.github.com/search/users';
const TOKEN = 'YOUR_GITHUB_TOKEN_HERE';

import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const data = await fetchUserData(username,);
      setUserData(data.items || []);
      setUsername('');
    } catch (err) {
      setError(true);
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-[#F7EFE5] p-6 rounded-lg shadow-xl max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full p-2 mb-4 border border-[#C8A1E0] bg-[#674188] text-[#F7EFE5] rounded"
        />

        <button
          type="submit"
          className="bg-[#C8A1E0] border-[#674188] hover:bg-[#E2BFD9] text-[#F7EFE5] font-bold py-2 px-4 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4 text-[#674188]">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">User not found</p>}

      {userData.length > 0 && (
        <div className=" items-center m-3">
          {userData.map((user) => (
            <div key={user.id} className="bg-[#F7EFE5] p-4 rounded-lg shadow-md">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h3 className="text-center mt-4 text-lg font-semibold text-[#C8A1E0]">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-2 text-[#F7EFE5] bg-[#E2BFD9] p-4 rounded"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;