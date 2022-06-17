import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg"
import Title from "../../utils/Title";

function Login() {
    Title('Войти - Movies Explorer')

    return (
        <main className="login">
          <Link to="/" className="login__logo-link">
            <img className="login__logo" src={logo} alt="логотип" />
          </Link>
          <h2 className="login__heading">Рады видеть!</h2>
          <form className="login__form" name="login__form">
            <label className="login__field">E-mail
              <input className="login__input login__input_error" id="email-input" type="email" name="email" autoComplete="off" placeholder="введите E-mail" required />
              <span className="login__input-error">Что-то пошло не так...</span>
            </label>
            <label className="login__field">Пароль
              <input className="login__input login__input_error" id="password-input" type="password" name="password" autoComplete="off" placeholder="введите пароль" required />
              <span className="login__input-error">Что-то пошло не так...</span>
            </label>
            <button type="submit" className="login__submit-button" aria-label="submit" id="login__submit-button">Войти</button>
          </form>
          <div className="login__bottom-container">
            <p className="login__bottom-text">Еще не зарегистрированы?</p>
            <Link to="/signup" className="login__bottom-link">Регистрация</Link>
          </div>
        </main>
    )
}

export default Login;
