import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg"
import Title from "../../utils/Title";
import { useState } from "react";

function Register({ handleRegister }) {
    Title('Зарегистрироваться - Movies Explorer')

    const [data, setData] = useState({
      name: 'test01',
      email: 'test01@ya.ru',
      password: '1234'
    })

    const { name, email, password } = data;

    function handleChange(e) {
      const {name, value} = e.target;
      setData({
          ...data,
          [name]: value
      });
  }

    function handleSubmit(e) {
        e.preventDefault();
        handleRegister(name, email, password);
    }

    return (
        <main className="register">
          <Link to="/" className="register__logo-link">
            <img className="register__logo" src={logo} alt="логотип" />
          </Link>
          <h2 className="register__heading">Добро пожаловать!</h2>
          <form onSubmit={handleSubmit} className="register__form" name="register__form">
            <label className="register__field"> Имя
              <input value={name} onChange={handleChange} className="register__input register__input_error" id="name-input" type="text" name="name" autoComplete="off" placeholder="введите имя" required />
              <span className="register__input-error">Что-то пошло не так...</span>
            </label>
            <label className="register__field"> E-mail
              <input value={email} onChange={handleChange} className="register__input register__input_error" id="email-input" type="email" name="email" autoComplete="off" placeholder="введите E-mail" required />
              <span className="register__input-error">Что-то пошло не так...</span>
            </label>
            <label className="register__field"> Пароль
              <input value={password} onChange={handleChange} className="register__input register__input_error" id="password-input" type="password" name="password" autoComplete="off" placeholder="введите пароль" required/>
              <span className="register__input-error">Что-то пошло не так...</span>
            </label>
            <button type="submit" className="register__submit-button" aria-label="submit" id="register__submit-button">Зарегистрироваться</button>
          </form>
          <div className="register__bottom-container">
            <p className="register__bottom-text">Уже зарегистрированы?</p>
            <Link to="/signin" className="register__bottom-link">Войти</Link>
          </div>
        </main>
    )
}

export default Register;
