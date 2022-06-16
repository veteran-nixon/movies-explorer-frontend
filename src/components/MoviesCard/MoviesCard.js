import image from '../../images/test-pick.png'

import React from 'react';


function MoviesCard() {
  const [isSavedMovie, setIsSavedMovie] = React.useState(false);

  const savedMovie = false;

  function handleClick() {
    if(!isSavedMovie) {
      setIsSavedMovie(true)
    } else {
      setIsSavedMovie(false)
    }
  }

  return (
    <div className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__caption">
          <h2 className="movies-card__heding">33 слова о дизайне</h2>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {
          savedMovie
          ? <button className="movies-card__button movies-card__button_delete"
          type="button" aria-label="delete-button" />
          : <button onClick={handleClick} className={`${isSavedMovie ? 'movies-card__button movies-card__button_saved' : 'movies-card__button movies-card__button_add'}`}
          type="button" aria-label="add-button"/>
        }
      </div>
      <img className="movies-card__image" src={image} alt="кадр фильма" />
    </div>
  )
}

export default MoviesCard;
