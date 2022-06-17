import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
      <div className="promo__nav-table">
        <NavTab href='#about-project' className='nav-tab' text='О проекте' />
        <NavTab href='#techs' className='nav-tab' text='Технологии' />
        <NavTab href='#about-me' className='nav-tab' text='Студент' />
      </div>
    </section>
  )
}

export default Promo;
