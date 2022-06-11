import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg"

function Register() {
    return (
        <main className="register">
          <Link to="/" className="register__logo-link">
            <img className="register__logo" src={logo} alt="логотип" />
          </Link>
          <h2 className="register__heading">Добро пожаловать!</h2>
          <form className="register__form" name="register__form">
            <label className="register__field"> Имя
              <input className="register-form__input register-form__input_error" id="name-input" type="text" name="name" autoComplete="off" />
              <span className="register-form__input-error">Что-то пошло не так...</span>
            </label>
            <label className="register__field"> E-mail
              <input className="register-form__input register-form__input_error" id="email-input" type="email" name="email" autoComplete="off" />
              <span className="register-form__input-error">Что-то пошло не так...</span>
            </label>
            <label className="register__field"> Пароль
              <input className="register-form__input register-form__input_error" id="password-input" type="password" name="password" autoComplete="off" />
              <span className="register-form__input-error">Что-то пошло не так...</span>
            </label>
            <button type="submit" className="register-form__submit-button" aria-label="submit" id="register-form__submit-button">Зарегистрироваться</button>
          </form>
          <div className="register__bottom-container">
            <p className="register__bottom-text">Уже зарегистрированы?</p>
            <Link to="/signin" className="register__bottom-link">Войти</Link>
          </div>
        </main>
    )
}

export default Register;
