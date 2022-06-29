import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg"
import Title from "../../utils/Title";
import useValidation from "../../hoock/useValidation";

function Login(props) {
    Title('Войти - Movies Explorer')

    const { values, handleChange, errors, isValid } = useValidation();

    function handleSubmit(e) {
      e.preventDefault();
      props.handleLogin(values.email, values.password);
    }

    return (
        <main className="login">
          <Link to="/" className="login__logo-link">
            <img className="login__logo" src={logo} alt="логотип" />
          </Link>
          <h2 className="login__heading">Рады видеть!</h2>
          <form onSubmit={handleSubmit} className="login__form" name="login__form">
            <label className="login__field">E-mail
              <input value={values.email || ''} onChange={handleChange} className={`login__input ${errors.email && 'login__input_error'}`} id="email-input" type="email" name="email" autoComplete="off" placeholder="введите E-mail" required />
              <span className="login__input-error">{errors.email}</span>
            </label>
            <label className="login__field">Пароль
              <input value={values.password || ''} onChange={handleChange} className={`login__input ${errors.email && 'login__input_error'}`} id="password-input" type="password" name="password" autoComplete="off" placeholder="введите пароль" required />
              <span className="login__input-error">{errors.password}</span>
            </label>
            <div className="login__submit-container">
              <span className="login__input-error">{props.loginError}</span>
              <button type="submit" disabled={!isValid} className={`login__submit-button ${!isValid && 'login__submit-button_disabled'}`} aria-label="submit" id="login__submit-button">Войти</button>
            </div>
          </form>
          <div className="login__bottom-container">
            <p className="login__bottom-text">Еще не зарегистрированы?</p>
            <Link to="/signup" className="login__bottom-link">Регистрация</Link>
          </div>
        </main>
    )
}

export default Login;
