import './style.css';
import displayList from './modules/displayList.js';
import id from './modules/gameID.js';

const postUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');
const user = document.querySelector('.add-name');
const score = document.querySelector('.add-score');
