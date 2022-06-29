import { useCallback, useEffect, useState } from 'react';


function MoviesCard(props) {
  const [isSavedMovie, setIsSavedMovie] = useState(false);

  const mySavedMovie = {
    country: props.movie.country,
    director: props.movie.director,
    duration: props.movie.duration,
    year: props.movie.year,
    description: props.movie.description,
    image: `${`https://api.nomoreparties.co${props.movie.image?.url}`}`,
    trailerLink: props.movie.trailerLink,
    thumbnail: `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`,
    movieId: props.movie.id,
    nameRU: props.movie.nameRU,
    nameEN: props.movie.nameEN,
  }

  function saveMovie() {
    props.handleSaveMovie(mySavedMovie);
    setIsSavedMovie(true);
  }

  // удалить фильм из SavedMovies на крестик
  function deleteSavedMovie() {
    props.handleDeleteMovie(props.movie._id);
    setIsSavedMovie(false);
  }

  // удалить фильм из Movies
  function removeSavedMovie() {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies')); // достать фильмы
    const card = savedMovies.find(movie => movie.nameRU === props.movie.nameRU); // найти карточки с одинаковыми именами
    props.handleDeleteMovie(card._id); // удалить каточку по _id
    setIsSavedMovie(false);
  }

  const isAddedMovie = useCallback(() => {
    const savedMovie = localStorage.getItem('savedMovies');
    if (savedMovie) {
      if (JSON.parse(savedMovie).some(movie => movie.nameRU === props.movie.nameRU)) {
        setIsSavedMovie(true);
      }
    }
  }, [props.movie.nameRU])

  useEffect(() => {
    isAddedMovie();
  }, [isAddedMovie]);

  const time = `${Math.trunc(mySavedMovie.duration/60)}ч ${mySavedMovie.duration%60}м`;

  return (
    <div className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__caption">
          <h2 className="movies-card__heading">{props.movie.nameRU}</h2>
          <p className="movies-card__duration">{`${time}`}</p>
        </div>
        {
          props.savedMovie
          ? <button onClick={deleteSavedMovie} className="movies-card__button movies-card__button_delete"
          type="button" aria-label="delete-button" />
          : <button onClick={isSavedMovie ? removeSavedMovie : saveMovie} className={`${isSavedMovie ? 'movies-card__button movies-card__button_saved' : 'movies-card__button movies-card__button_add'}`}
          type="button" aria-label="add-button"/>
        }
      </div>
      <a className="movies-card__link" target="_blank" rel="noreferrer" href={props.movie.trailerLink} >
        <img className="movies-card__image" src={props.savedMovie ? props.movie.image : mySavedMovie.image} alt={`кадр фильма ${props.movie.nameRU}`} />
      </a>
    </div>
  )
}

export default MoviesCard;
