function Footer() {
  return (
    <footer className="footer">
      <p className="footer__intro">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__text">
        <p className="footer__year">&#169;2022</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__link">
            <a target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="footer__link">
            <a target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
