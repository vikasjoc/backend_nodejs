const axios = require('axios');

function searchByAuthor(author) {
  return axios.get(`https://example.com/books/author/${author}`);
}

searchByAuthor('J.K. Rowling')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));