import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SeacrForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Title from "../../utils/Title";

function Movies() {
  Title('Список фильмов - Movies Explorer')

  return (
    <main className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <button type="button" className="movies__more-button" aria-label="more-button" id="movies__more-button">Еще</button>
      <Footer />
    </main>
  )
}

export default Movies;
