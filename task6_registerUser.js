const axios = require('axios');

async function registerUser(username, password) {
  try {
    const response = await axios.post('https://example.com/register', { username, password });
    console.log('User Registered:', response.data);
  } catch (error) {
    console.error(error);
  }
}

registerUser('testuser', 'password123');