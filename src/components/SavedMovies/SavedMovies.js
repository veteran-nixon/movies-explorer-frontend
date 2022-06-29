import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SeacrForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Title from "../../utils/Title";

function SavedMovies(props) {
  Title('Сохраненные фильмы - Movies Explorer')

  return (
    <main className="saved-movies">
      <Header loggedIn={props.loggedIn} />
      <section className="saved-movies__container">
        <SearchForm
          savedMovie={true}
          handleSearchSavedMovie={props.handleSearchSavedMovie}
          handleCLickShortMovie={props.handleCLickShortMovie}
          currentInputValue={props.currentInputValue}
          isShortMovie={props.isShortMovie}
        />
        <MoviesCardList
          savedMovie={true}
          movieList={props.movie}
          notFoundError={props.notFoundError}
          handleDeleteMovie={props.handleDeleteMovie}
        />
      </section>
      <Footer />
    </main>
  )
}

export default SavedMovies;
