const axios = require('axios');

async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`https://example.com/books/author/${author}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getBooksByAuthor('J.K. Rowling');