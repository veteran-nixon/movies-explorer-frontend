import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg"

function Login() {
    return (
        <main className="login">
          <Link to="/" className="login__logo-link">
            <img className="login__logo" src={logo} alt="логотип" />
          </Link>
          <h2 className="login__heading">Рады видеть!</h2>
          <form className="login__form" name="login__form">
            <label className="login__field">E-mail
              <input className="login-form__input login-form__input_error" id="email-input" type="email" name="email" autoComplete="off" />
              <span className="login-form__input-error">Что-то пошло не так...</span>
            </label>
            <label className="login__field">Пароль
              <input className="login-form__input login-form__input_error" id="password-input" type="password" name="password" autoComplete="off" />
              <span className="login-form__input-error">Что-то пошло не так...</span>
            </label>
            <button type="submit" className="login-form__submit-button" aria-label="submit" id="login-form__submit-button">Войти</button>
          </form>
          <div className="login__bottom-container">
            <p className="login__bottom-text">Еще не зарегистрированы?</p>
            <Link to="/signup" className="login__bottom-link">Зарегистрироваться</Link>
          </div>
        </main>
    )
}

export default Login;
