import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList() {
  const isLoading = false;

  return (
    <>
      {isLoading && <Preloader />}
      <section className="movies-card-list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </section>
      <button type="button" className="movies-card-list__more-button" aria-label="more-button" id="movies-card-list__more-button">Еще</button>
    </>

  )
}

export default MoviesCardList;
