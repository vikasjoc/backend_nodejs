const axios = require('axios');

function getAllBooksCallback(callback) {
  axios.get('https://example.com/books')
    .then(response => callback(null, response.data))
    .catch(err => callback(err));
}

getAllBooksCallback((err, data) => {
  if (err) console.error(err);
  else console.log(data);
});