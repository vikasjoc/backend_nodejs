const axios = require('axios');

async function loginUser(username, password) {
  try {
    const response = await axios.post('https://example.com/login', { username, password });
    console.log('Login Successful:', response.data);
  } catch (error) {
    console.error(error);
  }
}

loginUser('testuser', 'password123');