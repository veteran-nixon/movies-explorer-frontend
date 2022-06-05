import logoHeader from '../../images/header_logo.svg';

function Header() {
  return (
      <header className="header">
         <img className="header__logo" src={logoHeader} alt="логотип" />
      </header>
)
}

export default Header;
