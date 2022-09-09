fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'the best game ever',
  }),
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => data);

const id = 'XTHujk689qwERTzxcVBn';

export default id;