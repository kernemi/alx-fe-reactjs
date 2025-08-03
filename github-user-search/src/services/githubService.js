import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_GITHUB_API;

// ✅ Basic user fetch (e.g., github.com/users/{username})
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// ✅ Advanced user search with filters
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error('Search failed');
  }
};
