import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useNavigate, useLocation, Navigate} from 'react-router-dom'
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
import getMovies from '../../utils/MoviesApi';

function App() {
  const history = useNavigate();
  const location = useLocation();
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({});
  const [ movie, setMovie ] = useState([]); // стейт фимльмов
  const [ savedMovie, setSavedMovie ] = useState([]); // стейт сохраненных фильмов
  const [ defaultMoviesList, setDefaultMoviesList] = useState([]); // стейт списка фильмов при первой загрузке
  const [ isShortMovie, setIsShortMovie ] = useState(false);
  const [ isShortSavedMovie, setIsShortSavedMovie ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ searchError, setSearchError ] = useState(false);
  const [ notFoundError, setNotFoundError ] = useState(false)
  const [ currentInputValue, setCurrentInputValue ] = useState('');
  const [ loginError, setLoginError ] = useState(''); //  UnauthorizedError
  const [ сonflictError, setConflictError] = useState('') // ConflictError, когда есть пользователь с такой почтой
  const [ badRequestError, setBadRequestError] = useState('') // BadRequestError, когда переданы некорректыне данные

  function handleRegister(name, email, password) {
    return Auth.register(name, email, password)
    .then((data) => {
      setConflictError('');
      setBadRequestError('');
      localStorage.setItem('token', data.token)
      setLoggedIn(true)
      history('/movies')
    })
    .catch((err) => {
      if(err === 409) {
        setConflictError('Пользователь c таким email уже существует');
      } else if(err === 400) {
        setBadRequestError('Переданы некорректные данные при создании пользователя');
      }
    })
  }

  function handleLogin(email, password) {
    return Auth.authorize(email, password).then((data) => {
      setLoginError('')
      localStorage.setItem('token', data.token)
      setLoggedIn(true)
      history('/movies')
    })
    .catch((err) => {
      if(err === 401) {
        setLoginError('Неправильные почта или пароль. Попробуйте еще раз.')
      }
    })
  }

  function onSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('movies');
    localStorage.removeItem('inputValue')
    localStorage.removeItem('isShortMovie')
    history('/');
    setLoggedIn(false)
    setCurrentUser({})
    setMovie([])
    setDefaultMoviesList([])
  }

  function handleUpdateUser(currentUser) {
    api.editProfile(currentUser)
      .then((data) => {
        setCurrentUser(data)
        setConflictError('')
        setBadRequestError('')
      })
      .catch((err) => {
        if(err === 409) {
          setConflictError('Пользователь c таким email уже существует');
          console.log('Пользователь c таким email уже существует')
        } else if(err === 400) {
          setBadRequestError('Переданы некорректные данные при обновлении пользователя');
          console.log('Переданы некорректные данные при обновлении пользователя')
        }
      })
  }

  const tokenCheck = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token){
      Auth.getContent(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true)
          history(location.pathname, {replace: true});
        }
      })
      .catch((err) => console.log(err))
    }
  }, [])

  useEffect(() => {
    tokenCheck()
  }, [tokenCheck])

  useEffect(() => {
    api.getUser()
      .then((user) => {
        setCurrentUser(user)
      })
      .catch((err) => console.log(err))
  }, []);

  // функция поиска фильмов
  function handleSearchMovie(inputValue) {
    setMovie([]);
    setIsLoading(true);
    setSearchError(false);
    setNotFoundError(false);
    localStorage.setItem('inputValue', inputValue);
    setCurrentInputValue(localStorage.getItem('inputValue'));

    // если в defaultMoviesList нет фильмов, положить фильмы в переменную, продолжать поиск фильмов не из апи, а из нового массива
    if(defaultMoviesList.length === 0) {
      getMovies().then(res => {
        setDefaultMoviesList(res)
        // начальное значение поиска с фильтром
        let filtredMovie =[];
        // фильтр по ключевому слову, записывает значение в filtredMovie
        res.forEach((movie) => {
          if(movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())) {
            if(isShortMovie) {
              movie.duration <= 40 && filtredMovie.push(movie);
            } else {
              filtredMovie.push(movie);
            }
          }
          return filtredMovie;
        })

        if(filtredMovie.length === 0) {
          setMovie([]);
          setNotFoundError(true);
          setIsLoading(false);
        } else {
          localStorage.setItem('movies', JSON.stringify(filtredMovie));
          setMovie(JSON.parse(localStorage.getItem('movies')))
        }
      })
      .catch(() => {
        setSearchError(true);
        setMovie([])
      })
      .finally(() => setIsLoading(false))
    } else {
      let filtredMovie =[];
      defaultMoviesList.forEach((movie) => {
        if(movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())) {
          if(isShortMovie) {
            movie.duration <= 40 && filtredMovie.push(movie);
          } else {
            filtredMovie.push(movie);
          }
        }
        return filtredMovie;
        })

      if(filtredMovie.length === 0) {
        setMovie([]);
        setNotFoundError(true);
        setIsLoading(false);
      } else if (filtredMovie.length !== 0) {
        localStorage.setItem('movies', JSON.stringify(filtredMovie));
        setMovie(JSON.parse(localStorage.getItem('movies')))
        setIsLoading(false)
      } else {
        setSearchError(true);
        setMovie([]);
        setIsLoading(false);
      }
    }
  }

  function handleSearchSavedMovie(inputValue) {
    setNotFoundError(false)
    let filtredSavedMovie =[];
    JSON.parse(localStorage.getItem('savedMovies')).forEach((movie) => {
      if(movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())) {
        if(isShortSavedMovie) {
          movie.duration <= 40 && filtredSavedMovie.push(movie);
        } else {
          filtredSavedMovie.push(movie);
        }
      }
      return filtredSavedMovie;
    })
    setSavedMovie(filtredSavedMovie)
    if(filtredSavedMovie.length === 0) {
      setNotFoundError(true)
    }
  }

  function handleCLickShortMovie() {
    if(!isShortMovie) {
      setIsShortMovie(localStorage.getItem('isShortMovie'))
      localStorage.setItem('isShortMovie', true)
      setIsShortMovie(true)
    } else {
      setIsShortMovie(true)
      setIsShortMovie(localStorage.removeItem('isShortMovie'))
    }
  }

  function handleCLickShortSavedMovie() {
    setIsShortSavedMovie(!isShortSavedMovie)
  }

  function saveMovie(movie) {
    api.saveMovie(movie).then((res) => {
      const movies = [...savedMovie, res];
      setSavedMovie(prev => ([...prev, res]));
      localStorage.setItem('savedMovies', JSON.stringify(movies))
    })
    .catch(err => console.log(err))
  }

  function deleteSavedMovie(movieId) {
    api.deleteSavedMovie(movieId).then(() => {
      const savedMovieFiltred = savedMovie.filter((i) => {
        return i._id !== movieId
      })
      setSavedMovie(savedMovieFiltred)
      localStorage.setItem('savedMovies', JSON.stringify(savedMovieFiltred))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    setNotFoundError(false);
    setSearchError(false);
    setCurrentInputValue(localStorage.getItem('inputValue'));
    setIsShortMovie(localStorage.getItem('isShortMovie'));
    setIsShortSavedMovie(false);
    if(loggedIn) {
      const movies = localStorage.getItem('movies');
      const savedMovies = localStorage.getItem('savedMovies')
      if (movies) {
        setMovie(JSON.parse(movies));
      }
      if (savedMovies) {
        setSavedMovie(JSON.parse(savedMovies));
      } else {
        api.getSavedMovie()
          .then((res) => {
            setSavedMovie(res);
            localStorage.setItem('savedMovies', JSON.stringify(res));
          })
          .catch(err => console.log(err));
      }
    }

  }, [loggedIn, location]);


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact path='/'
            element={<Main loggedIn={loggedIn} />}
          />
          <Route path='/movies'
            element={
              <ProtectedRoute
                handleDeleteMovie={deleteSavedMovie}
                handleSaveMovie={saveMovie}
                currentInputValue={currentInputValue}
                loggedIn={loggedIn}
                searchError={searchError}
                notFoundError={notFoundError}
                isLoading={isLoading}
                isShortMovie={isShortMovie}
                handleCLickShortMovie={handleCLickShortMovie}
                movie={movie}
                handleSearchMovie={handleSearchMovie}
                element={Movies}
            />}
          />
          <Route path='/movies-saved'
            element={
              <ProtectedRoute
                notFoundError={notFoundError}
                handleDeleteMovie={deleteSavedMovie}
                handleSearchSavedMovie={handleSearchSavedMovie}
                movie={savedMovie}
                handleCLickShortMovie={handleCLickShortSavedMovie}
                isShortMovie={isShortSavedMovie}
                loggedIn={loggedIn}
                element={SavedMovies}
              />}
          />
          <Route path='/profile'
            element={<ProtectedRoute loggedIn={loggedIn}
              onUpdateUser={handleUpdateUser}
              signOut={onSignOut}
              element={Profile}
              сonflictError={сonflictError}
              badRequestError={badRequestError}
            />}
          />
          <Route
            path='/signup'
            element={loggedIn ? <Navigate to='/' /> : <Register handleRegister={handleRegister} сonflictError={сonflictError} badRequestError={badRequestError} />}
          />
          <Route
            path='/signin'
            element={loggedIn ? <Navigate to='/' /> :  <Login handleLogin={handleLogin} loginError={loginError}/>}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
