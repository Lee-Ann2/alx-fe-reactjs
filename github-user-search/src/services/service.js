import axios from 'axios';

export const fetchUserData = async (username,) => {
  let query = '';
  if (username) query += `user:${username} `;
  
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};