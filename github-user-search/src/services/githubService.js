import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_GITHUB_API;

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  try {
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${query}`
    );
    return response.data.items;
  } catch (error) {
    throw new Error('Search failed');
  }
};
