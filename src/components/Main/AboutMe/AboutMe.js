import avatar from '../../../images/avatar.jpg'

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__heading">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__column">
          <h3 className="about-me__name">Евгений</h3>
          <p className="about-me__bio">Cтудент Яндекс.Практикума курса "Веб-разработчик", 28 лет</p>
          <p className="about-me__info">Родился и живу в Новосибирске, закончил юридический факультет НГУ.
            На данный момент работаю и учусь веб-разработке.
            Раньше кодил только в GTA и на домофоне.
            Люблю сноуборд, сериальчики и поесть.
            Играю в Варкрафт. Есть кот по кличке Артас.
            Хочу после курса найти работу по новой специальности и работать из дома, на даче или на берегу моря.
          </p>
          <ul className="about-me__links">
              <li className="about-me__link">
                <a className="about-me__link-text" target="_blank" rel="noreferrer" href="https://vk.com">ВКонтакте</a>
              </li>
              <li className="about-me__link">
                <a className="about-me__link-text" target="_blank" rel="noreferrer" href="https://github.com/veteran-nixon">Github</a>
              </li>
            </ul>
        </div>
        <div className="about-me__column">
          <img className="about-me__avatar" src={avatar} alt="аватар" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
