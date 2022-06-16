function Footer() {
  return (
    <footer className="footer">
      <p className="footer__intro">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__text-container">
        <p className="footer__year">&#169;2022</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a className="footer__link-text" target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/profile/web/">Яндекс.Практикум</a>
          </li>
          <li className="footer__link">
            <a className="footer__link-text" target="_blank" rel="noreferrer" href="https://github.com/veteran-nixon">Github</a>
          </li>
          <li className="footer__link">
            <a className="footer__link-text" target="_blank" rel="noreferrer" href="https://vk.com">ВКонтакте</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
