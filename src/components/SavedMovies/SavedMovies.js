import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SeacrForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Title from "../../utils/Title";

function SavedMovies(props) {
  Title('Сохраненные фильмы - Movies Explorer')

  return (
    <main className="saved-movies">
      <Header loggedIn={props.loggedIn}/>
      <section className="saved-movies__container">
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </main>
  )
}

export default SavedMovies;
