import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg"
import Title from "../../utils/Title";
import { useState } from "react";

function Login({ handleLogin }) {
    Title('Войти - Movies Explorer')

    const [data, setData] = useState({
      email: 'test01@ya.ru',
      password: '1234'
    })

    const { email, password } = data;

    function handleChange(e) {
      const {name, value} = e.target;
      setData({
          ...data,
          [name]: value
      });
  }

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin(email, password);
    }

    return (
        <main className="login">
          <Link to="/" className="login__logo-link">
            <img className="login__logo" src={logo} alt="логотип" />
          </Link>
          <h2 className="login__heading">Рады видеть!</h2>
          <form onSubmit={handleSubmit} className="login__form" name="login__form">
            <label className="login__field">E-mail
              <input value={email} onChange={handleChange} className="login__input login__input_error" id="email-input" type="email" name="email" autoComplete="off" placeholder="введите E-mail" required />
              <span className="login__input-error">Что-то пошло не так...</span>
            </label>
            <label className="login__field">Пароль
              <input value={password} onChange={handleChange} className="login__input login__input_error" id="password-input" type="password" name="password" autoComplete="off" placeholder="введите пароль" required />
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
