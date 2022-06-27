import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect} from "react";

function MoviesCardList(props) {
  const [ initialCardAmount, setInitialCardAmount] = useState(Number(renderInitialCard()));
  const [ addedCardAmount, setAddedCardAmount] = useState(Number(renderAddedCard()));

  function renderInitialCard() {
    const windowSize = window.innerWidth;
    if(windowSize < 750) {
      return 5
    } else if(windowSize < 1160) {
      return 8
    } else if(windowSize > 1160) {
      return 12
    }
  }

  function renderAddedCard() {
    const windowSize = window.innerWidth;
    if(windowSize < 750) {
      return 2
    } else if(windowSize < 1160) {
      return 2
    } else if(windowSize > 1160) {
      return 3
    }
  }

  function handleSizeChange() {
    const windowSize = window.innerWidth;
    if(windowSize < 750) {
      setInitialCardAmount(5)
      setAddedCardAmount(2)
    } else if(windowSize < 1160) {
      setInitialCardAmount(8)
      setAddedCardAmount(2)
    } else if(windowSize > 1160) {
      setInitialCardAmount(12)
      setAddedCardAmount(3)
    }
  }

  const addCard = () => {
      setInitialCardAmount(initialCardAmount + addedCardAmount)
  }

  const cards = props.movieList.slice(0, initialCardAmount);

  useEffect(() => {
    window.addEventListener('resize', () => setTimeout(handleSizeChange, 200))
  }, [])


  return (
    <>
      {props.isLoading && <Preloader />}
      <span className={`movie-card-list__error ${!props.searchError && `movie-card-list__error_hidden`}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
      <span className={`movie-card-list__error ${!props.notFoundError && `movie-card-list__error_hidden`}`}>Ничего не найдено</span>
      <section className="movies-card-list">
      {cards.map((movie) => {
        return (
          <MoviesCard
            key={props.savedMovie ? movie.movieId : movie.id}
            movie={movie}
            handleDeleteMovie={props.handleDeleteMovie}
            handleSaveMovie={props.handleSaveMovie}
            savedMovie={props.savedMovie}
          />
        )}
      )}
      </section>
      {!props.savedMovie &&
        <button
        type="button"
        onClick={addCard}
        className={`movies__more-button ${cards.length === props.movieList.length && `movies__more-button_hidden`}`}
        aria-label="more-button" id="movies__more-button">Еще</button>
      }
    </>
  )
}

export default MoviesCardList;
