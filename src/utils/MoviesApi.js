const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)

function getMovies() {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
  })
  .then(checkResponse)
};

export default getMovies;
