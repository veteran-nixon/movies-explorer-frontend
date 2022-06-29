import logoHeader from '../../images/header_logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import Navigation from './Navigation/Navigation';

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logoHeader} alt="логотип" />
      </Link>
      <Navigation loggedIn={props.loggedIn} />
    </header>
  )
}

export default Header;
