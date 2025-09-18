const axios = require('axios');

async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`https://example.com/books/${isbn}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getBookByISBN('12345');