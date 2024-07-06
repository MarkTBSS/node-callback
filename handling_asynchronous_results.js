const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    // handle success
    console.log('Data received:', response.data);
  })
  .catch(function (error) {
    // handle error
    console.error('An error occurred:', error);
  });

// not callback
//const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data received:', response.data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchData();