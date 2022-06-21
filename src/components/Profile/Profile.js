import { useState, useContext, useEffect } from "react";
import Title from "../../utils/Title";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContrxt";

function Profile(props) {
  Title('Аккаунт - Movies Explorer')

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if(currentUser.name) {
      setName(currentUser.name);
      setEmail(currentUser.email)
    }

  }, [currentUser])

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      email
    });
  }


  return (
    <main className="profile">
      <Header loggedIn={props.loggedIn} />
      <h1 className="profile__heading">{`Привет, ${currentUser.name}!`}</h1>
      <form onSubmit={handleSubmit} className="profile__form" name="profile__form">
        <span className="profile__input-error">Что-то пошло не так...</span>
        <div className="profile__form-container">
          <label className="profile__field">Имя</label>
          <input value={name} onChange={handleChangeName} className="profile__input" id="profile-name-input" type="text" name="name" placeholder="Евгений" required />
        </div>
        <div className="profile__form-container">
          <label className="profile__field">E-mail</label>
          <input value={email} onChange={handleChangeEmail} className="profile__input" id="profile-email-input" type="email" name="email" placeholder="pochta@yandex.ru" required />
        </div>
        <span className="profile__input-error">Что-то пошло не так...</span>
        <button type="submit" className="profile__submit-button" aria-label="submit" id="">Редактировать</button>
      </form>
      <button onClick={props.signOut} type="button" className="profile__exit-button" aria-label="submit" id="">Выйти из аккаута</button>
    </main>
  )
}

export default Profile;
