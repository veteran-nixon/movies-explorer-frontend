class MainApi {
  constructor({url}) {
    this._url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getUser() {
    return fetch(`${this._url}/users/me`, { headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json',
    }, })
      .then(this._checkResponse)
  }

  editProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: data.name,
          email: data.email
      })
    })
    .then(this._checkResponse)
  }

  saveMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    })
    .then(this._checkResponse)
  }

  deleteSavedMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json',
      }
    })
    .then(this._checkResponse)
  }

  getSavedMovie() {
    return fetch(`${this._url}/movies/`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json',
      }
    })
    .then(this._checkResponse)
  }
}

const api = new MainApi({
  url: 'https://api.movies.dolganev.nomoredomains.sbs',
});

export default api;

