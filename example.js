// example.js - GitHub API example

/**
 * Fetches data from GitHub API
 * @param {string} username - GitHub username
 * @return {Promise<object>} User data
 */
async function fetchGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
}

/**
 * Fetches repositories for a GitHub user
 * @param {string} username - GitHub username
 * @return {Promise<Array>} User repositories
 */
async function fetchUserRepositories(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
}

// Example usage
// fetchGitHubUser('octocat')
//   .then(user => console.log(user))
//   .catch(err => console.error(err));

// Export functions for module use
module.exports = {
  fetchGitHubUser,
  fetchUserRepositories
};