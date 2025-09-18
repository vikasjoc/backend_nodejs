const axios = require('axios');

async function getBookReview(isbn) {
  try {
    const response = await axios.get(`https://example.com/books/${isbn}/reviews`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getBookReview('12345');