const axios = require('axios');

async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`https://example.com/books/title/${title}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getBooksByTitle('Harry Potter');