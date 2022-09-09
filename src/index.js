import './style.css';
import displayList from './modules/displayList.js';
import id from './modules/gameID.js';

const postUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');
const user = document.querySelector('.add-name');
const score = document.querySelector('.add-score');

displayList.getData();

const gameScoresInfo = async () => {
  const response = await fetch(`${postUrl}/${id}/scores`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: user.value,
      score: score.value,
    }),
  });
  const data = await response.json();
  return data;
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  gameScoresInfo();
  user.value = '';
  score.value = '';
});

refresh.addEventListener('click', () => {
  window.location.reload();
});

