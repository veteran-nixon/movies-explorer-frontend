import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { CurrentUserContext } from '../../contexts/CurrentUserContrxt';
import * as Auth from '../../utils/Auth';
import api from '../../utils/MainApi';
import ProtectedRoute from '../../hoc/ProtectedRoute';

function App() {
  const history = useNavigate();
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({});


  function handleRegister(name, email, password) {
    return Auth.register(name, email, password).then((data) => {
      localStorage.setItem('token', data.token)
      setLoggedIn(true)
      history('/movies')
      console.log(name, email, password)
    })
    .catch((err) => console.log(err))
  }

  function handleLogin(email, password) {
    return Auth.authorize(email, password).then((data) => {
      localStorage.setItem('token', data.token)
      setLoggedIn(true)
      history('/movies')
      console.log(data.token)
    })
    .catch((err) => console.log(err))
  }

  function signOut() {
    localStorage.removeItem('token');
    history('/');
    setLoggedIn(false)
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token){
      Auth.getContent(token).then((res) => {
        if (res){
          setLoggedIn(true)
          history('/movies')
        }
      })
      .catch((err) => console.log(err))
    } else {
      setLoggedIn(false)
    }
  }

  function handleUpdateUser(currentUser) {
    api.editProfile(currentUser)
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if(loggedIn) {
      api.getUser()
      .then((user) => {
        setCurrentUser(user)
      })
      .catch((err) => console.log(err))
    }
    tokenCheck()
  }, [loggedIn])


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact path='/'
            element={<Main loggedIn={loggedIn} />}
          />
          <Route path='/movies/*' element={<ProtectedRoute loggedIn={loggedIn} element={Movies} />} />
          <Route path='/movies-saved' element={<ProtectedRoute loggedIn={loggedIn} element={SavedMovies} />} />
          <Route path='/profile' element={<ProtectedRoute onUpdateUser={handleUpdateUser} signOut={signOut} loggedIn={loggedIn} element={Profile} />} />
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
