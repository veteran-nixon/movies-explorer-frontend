import Title from "../../utils/Title";
import Header from "../Header/Header";

function Profile(props) {
  Title('Аккаунт - Movies Explorer')

  return (
    <main className="profile">
      <Header loggedIn={props.loggedIn} />
      <h1 className="profile__heading">Привет, Евгений!</h1>
      <form className="profile__form" name="profile__form">
        <span className="profile__input-error">Что-то пошло не так...</span>
        <div className="profile__form-container">
          <label className="profile__field">Имя</label>
          <input className="profile__input" id="profile-name-input" type="text" name="name" placeholder="Евгений" required />
        </div>
        <div className="profile__form-container">
          <label className="profile__field">E-mail</label>
          <input className="profile__input" id="profile-email-input" type="email" name="email" placeholder="pochta@yandex.ru" required />
        </div>
        <span className="profile__input-error">Что-то пошло не так...</span>
        <button type="submit" className="profile__submit-button" aria-label="submit" id="">Редактировать</button>
      </form>
      <button type="button" className="profile__exit-button" aria-label="submit" id="">Выйти из аккаута</button>
    </main>
  )
}

export default Profile;
