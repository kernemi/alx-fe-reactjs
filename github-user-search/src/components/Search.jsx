import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(input);
      setUser(data);
    } catch (err) {
setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <form onSubmit={handleSearch} className="grid gap-2">
  <input
    type="text"
    placeholder="Username (required)"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="p-2 border rounded"
    required
  />
  <input
    type="text"
    placeholder="Location (optional)"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    className="p-2 border rounded"
  />
  <input
    type="number"
    placeholder="Minimum repositories (optional)"
    value={minRepos}
    onChange={(e) => setMinRepos(e.target.value)}
    className="p-2 border rounded"
  />
  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
    Search
  </button>
</form>


      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="p-4 border rounded mt-4 bg-white shadow">
          <img src={user.avatar_url} alt="avatar" className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="text-xl font-semibold mt-2">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
