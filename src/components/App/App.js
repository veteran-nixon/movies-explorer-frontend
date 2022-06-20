import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { CurrentUserContext } from '../../contexts/CurrentUserContrxt';
import * as Auth from '../../utils/Auth';

function App() {
  const history = useNavigate();
  const [ loggedIn, setIsLoggedIn ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({})

  function handleRegister(name, email, password) {
    return Auth.register(name, email, password).then((data) => {
      localStorage.setItem('token', data.token)
      setIsLoggedIn(true)
      history('/movies')
      console.log(name, email, password)
    })
    .catch((err) => console.log(err))
  }

  function handleLogin(email, password) {
    return Auth.authorize(email, password).then((data) => {
      localStorage.setItem('token', data.token)
      setIsLoggedIn(true)
      history('/movies')
      console.log(data.token)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact path='/'
            element={<Main loggedIn={loggedIn} />}
          />
          <Route
            path='/movies/*'
            element={loggedIn
            ? <Movies loggedIn={loggedIn} />
            : <Navigate to='/signin' />}
          />
          <Route
            path='/movies-saved'
            element={loggedIn
            ? <SavedMovies loggedIn={loggedIn} />
            : <Navigate to='/signin' />}
          />
          <Route
            path='/profile'
            element={loggedIn
            ? <Profile loggedIn={loggedIn} />
            : <Navigate to='/signin' />}
          />
          <Route
            path='/signup'
            element={<Register handleRegister={handleRegister} />}
          />
          <Route
            path='/signin'
            element={<Login handleLogin={handleLogin} />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
