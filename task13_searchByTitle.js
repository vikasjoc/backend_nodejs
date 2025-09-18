const axios = require('axios');

function searchByTitle(title) {
  return axios.get(`https://example.com/books/title/${title}`);
}

searchByTitle('Harry Potter')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));