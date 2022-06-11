import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';


function App() {
  return (
    <div className="page">
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
