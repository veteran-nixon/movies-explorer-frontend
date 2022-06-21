class MainApi {
  constructor({url}) {
      this._url = url;
  }

  _checkResponse(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
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
}

const api = new MainApi({
    url: 'http://localhost:3000',
  });

export default api;

