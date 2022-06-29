import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg"
import Title from "../../utils/Title";
import useValidation from "../../hoock/useValidation";

function Register(props) {
    Title('Зарегистрироваться - Movies Explorer')

    const { values, handleChange, errors, isValid } = useValidation();

    function handleSubmit(e) {
      e.preventDefault();
      props.handleRegister(values.name, values.email, values.password);
    }

    return (
        <main className="register">
          <Link to="/" className="register__logo-link">
            <img className="register__logo" src={logo} alt="логотип" />
          </Link>
          <h2 className="register__heading">Добро пожаловать!</h2>
          <form onSubmit={handleSubmit} className="register__form" name="register__form">
            <label className="register__field"> Имя
              <input value={values.name || ''} minLength='2' onChange={handleChange} className={`register__input ${errors.name && 'register__input_error'}`} id="name-input" type="text" name="name" autoComplete="off" placeholder="введите имя" required />
              <span className="register__input-error">{errors.name}</span>
            </label>
            <label className="register__field"> E-mail
              <input value={values.email || ''} onChange={handleChange} className={`register__input ${errors.name && 'register__input_error'}`} id="email-input" type="email" name="email" autoComplete="off" placeholder="введите E-mail" required />
              <span className="register__input-error">{errors.email}</span>
            </label>
            <label className="register__field"> Пароль
              <input value={values.password || ''} onChange={handleChange} className={`register__input ${errors.name && 'register__input_error'}`} id="password-input" type="password" name="password" autoComplete="off" placeholder="введите пароль" required/>
              <span className="register__input-error">{errors.password}</span>
            </label>
            <div className="register__submit-container">
              <span className="register__input-error">{(props.badRequestError && props.badRequestError) || (props.сonflictError && props.сonflictError)}</span>
              <button type="submit" disabled={!isValid} className={`register__submit-button ${!isValid && 'register__submit-button_disabled'}`} aria-label="submit" id="register__submit-button">Зарегистрироваться</button>
            </div>
          </form>
          <div className="register__bottom-container">
            <p className="register__bottom-text">Уже зарегистрированы?</p>
            <Link to="/signin" className="register__bottom-link">Войти</Link>
          </div>
        </main>
    )
}

export default Register;
