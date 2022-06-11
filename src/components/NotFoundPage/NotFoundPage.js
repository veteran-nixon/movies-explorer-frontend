import { useNavigate } from "react-router-dom"

function NotFoundPage() {
  const history = useNavigate();

  function handleReturnButtonClick() {
    history(-1);
  }

  return (
    <section className="not-found-page">
      <h1 className="not-found-page__heading">404</h1>
      <p className="not-found-page__description">Страница не найдена</p>
      <button onClick={handleReturnButtonClick} className="not-found-page__return-button" aria-label="return" id="not-found-page__return-button">Назад</button>
    </section>
  )
}

export default NotFoundPage;
