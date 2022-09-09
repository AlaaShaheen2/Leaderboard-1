import id from './gameID.js';

const postUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

class displayList {
  static getData = async () => {
    const response = await fetch(`${postUrl}/${id}/scores`);
    const info = await response.json();
    const infoResult = info.result;
    infoResult.forEach((data) => {
      displayList.render(data);
    });
  };

  static render(data) {
    const scoresBoard = document.querySelector('.scores-board');
    const scoreInfo = document.createElement('li');
    scoreInfo.innerHTML = `
      <p>${data.user}</p>
      <p>: ${data.score}</p>
      `;

    scoresBoard.appendChild(scoreInfo);
  }
}
export default displayList;