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
        {/* <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard /> */}
      </section>

    </>

  )
}

export default MoviesCardList;
