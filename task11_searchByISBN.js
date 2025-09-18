const axios = require('axios');

function searchByISBN(isbn) {
  return axios.get(`https://example.com/books/${isbn}`);
}

searchByISBN('12345')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));