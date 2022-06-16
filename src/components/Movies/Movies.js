import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SeacrForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <main className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  )
}

export default Movies;
