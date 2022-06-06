import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
      <div className="promo__nav-container">
        <NavTab text='О проекте' />
        <NavTab text='Технологии' />
        <NavTab text='Студент' />
      </div>
    </section>
  )
}

export default Promo;
