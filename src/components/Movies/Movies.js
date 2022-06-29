import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SeacrForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Title from "../../utils/Title";

function Movies(props) {
  Title('Список фильмов - Movies Explorer')

  return (
    <main className="movies">
      <Header loggedIn={props.loggedIn} />
      <SearchForm
        handleSearchMovie={props.handleSearchMovie}
        handleCLickShortMovie={props.handleCLickShortMovie}
        isShortMovie={props.isShortMovie}
        currentInputValue={props.currentInputValue}
      />
      <MoviesCardList
        handleSaveMovie={props.handleSaveMovie}
        handleDeleteMovie={props.handleDeleteMovie}
        movieList={props.movie}
        searchError={props.searchError}
        isLoading={props.isLoading}
        notFoundError={props.notFoundError}
      />
      <Footer />
    </main>
  )
}

export default Movies;
