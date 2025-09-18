const axios = require('axios');

async function deleteReview(isbn, username) {
  try {
    const response = await axios.delete(`https://example.com/books/${isbn}/reviews/${username}`);
    console.log('Review Deleted:', response.data);
  } catch (error) {
    console.error(error);
  }
}

deleteReview('12345', 'testuser');