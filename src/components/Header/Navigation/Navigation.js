import { NavLink } from "react-router-dom"

function Navigation() {
  // в дальнейшем стейт логина
  const isLogin = true;

  return (
    <>
      {isLogin
        ? <>
            <button type="button" className="nav__burger-menu nav__burger-menu_hidden" id="nav__burger-menu" aria-label="burger-menu" />
            <nav className="nav__container nav__container_hidden nav__container_mobile ">
              <button type="button" className="nav__close-button" id="nav__close-button" aria-label="close-button" />
              <ul className="nav__list nav__list_mobile">
                <li className="nav__list-cell nav__list-cell_mobile">
                  <NavLink to="/" className={({isActive}) => `${isActive ? "nav__link nav__link_hidden nav__link_mobile nav__link_active" : "nav__link nav__link_mobile"}`}>Главная</NavLink>
                </li>
                <li className="nav__list-cell nav__list-cell_mobile">
                  <NavLink to="/movies" className={({isActive}) => `${isActive ? "nav__link nav__link_mobile nav__link_active" : "nav__link nav__link_mobile"}`}>Фильмы</NavLink>
                </li>
                <li className="nav__list-cell nav__list-cell_mobile">
                  <NavLink to="/movies-saved" className={({isActive}) => `${isActive ? "nav__link nav__link_mobile nav__link_active" : "nav__link nav__link_mobile"}`}>Сохраненные фильмы</NavLink>
                </li>
              </ul>
              <ul className="nav__list">
                <li>
                  <NavLink to="/profile" className={({isActive}) => `${isActive ? "nav__link nav__link_active nav__link_theme_grey" : "nav__link nav__link_theme_grey"}`}>Аккаунт</NavLink>
                </li>
              </ul>
            </nav>
          </>
        : <>
            <nav className="nav__container nav__container_main">
              <ul className="nav__list">
                <li className="nav__list-cell nav__list-cell_main">
                  <NavLink to="/signup" className="nav__link">Регистрация</NavLink>
                </li>
                <li className="nav__list-cell nav__list-cell_main">
                  <NavLink to="/signin" className="nav__link nav__link_theme_green">Войти</NavLink>
                </li>
              </ul>
            </nav>
          </>
      }
    </>
  )

}

export default Navigation;
