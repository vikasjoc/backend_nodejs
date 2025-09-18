const axios = require('axios');

async function addOrUpdateReview(isbn, username, review) {
  try {
    const response = await axios.put(`https://example.com/books/${isbn}/reviews`, { username, review });
    console.log('Review Added/Updated:', response.data);
  } catch (error) {
    console.error(error);
  }
}

addOrUpdateReview('12345', 'testuser', 'Great book!');