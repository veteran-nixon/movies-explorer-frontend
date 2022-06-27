import { useContext, useEffect } from "react";
import Title from "../../utils/Title";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContrxt";
import useValidation  from "../../hoock/useValidation";

function Profile(props) {
  Title('Аккаунт - Movies Explorer');

  const { values, setValues, handleChange, errors, isValid } = useValidation();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if(currentUser.name) {
      setValues({name: currentUser.name, email: currentUser.email})
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({...values});
  };

  return (
    <main className="profile">
      <Header loggedIn={props.loggedIn} />
      <h1 className="profile__heading">{`Привет, ${currentUser.name}!`}</h1>
      <form onSubmit={handleSubmit} className="profile__form" name="profile__form">
        <span className="profile__input-error">{errors.name}</span>
        <div className="profile__form-container">
          <label className="profile__field">Имя</label>
          <input value={values.name || ''} minLength='2' onChange={handleChange} className={`profile__input ${errors.name && 'profile__input_error'}`} id="profile-name-input" type="text" name="name" placeholder="Введите имя" required />
        </div>
        <div className="profile__form-container">
          <label className="profile__field">E-mail</label>
          <input value={values.email || ''} onChange={handleChange} className={`profile__input ${errors.email && 'profile__input_error'}`} id="profile-email-input" type="email" name="email" placeholder="Введите E-mail" required />
        </div>
        <span className="profile__input-error">{errors.email || props.сonflictError || props.badRequestError}</span>
        <button type="submit" className={(isValid && (currentUser.email !== values.email || currentUser.name !== values.name)) ? "profile__submit-button" : "profile__submit-button profile__submit-button_disabled"} disabled={!isValid} aria-label="submit" id="">Редактировать</button>
      </form>
      <button onClick={props.signOut} type="button" className="profile__exit-button" aria-label="submit" id="">Выйти из аккаута</button>
    </main>
  )
}

export default Profile;
