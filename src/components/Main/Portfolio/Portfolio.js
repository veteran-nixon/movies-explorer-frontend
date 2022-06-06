import arrow from '../../../images/arrow_icon.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__links">
              <li className="portfolio__link">
                <a className="portfolio__link-text" target="_blank" rel="noreferrer" href="https://github.com/veteran-nixon/how-to-learn">Статичный сайт</a>
                <img src={arrow} alt="стрелка" />
              </li>
              <li className="portfolio__link">
                <a className="portfolio__link-text" target="_blank" rel="noreferrer" href="https://github.com/veteran-nixon/russian-travel">Адаптивный сайт</a>
                <img src={arrow} alt="стрелка" />
              </li>
              <li className="portfolio__link">
                <a className="portfolio__link-text" target="_blank" rel="noreferrer" href="https://github.com/veteran-nixon/react-mesto-api-full">Одностраничное приложение</a>
                <img src={arrow} alt="стрелка" />
              </li>
            </ul>
    </section>
  )
}

export default Portfolio;
