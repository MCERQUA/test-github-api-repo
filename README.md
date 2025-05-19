# GitHub API Test Repository

This repository was created using the GitHub API to demonstrate its functionality.

## Features Tested
- Repository creation
- File creation
- Code searching
- Repository searching
- File content retrieval

## JavaScript Example
```javascript
// Simple fetch example
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
```