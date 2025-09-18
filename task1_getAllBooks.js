const axios = require('axios');

async function getAllBooks() {
  try {
    const response = await axios.get('https://example.com/books');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getAllBooks();