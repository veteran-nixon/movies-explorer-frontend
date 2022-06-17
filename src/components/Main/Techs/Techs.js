import NavTab from "../NavTab/NavTab";

function Techs() {
  return (
    <section id="techs" className="techs">
      <h2 className="techs__heading">Технологии</h2>
      <div className="techs__container">
        <h3 className="techs__nav-heading">7 технологий</h3>
        <p className="techs__nav-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__nav-table">
          <NavTab className='nav-tab nav-tab_techs' href="https://www.w3.org/TR/2011/WD-html5-20110405/" target="_blank" text='HTML' />
          <NavTab className='nav-tab nav-tab_techs' href="https://www.w3.org/Style/CSS/specs.ru.html"  target="_blank" text='CSS' />
          <NavTab className='nav-tab nav-tab_techs' href="https://www.w3schools.com/js/js_es6.asp"  target="_blank" text='JS' />
          <NavTab className='nav-tab nav-tab_techs' href="https://ru.reactjs.org/"  target="_blank" text='React' />
          <NavTab className='nav-tab nav-tab_techs' href="https://github.com/"  target="_blank" text='Git' />
          <NavTab className='nav-tab nav-tab_techs' href="https://expressjs.com/ru/"  target="_blank" text='Express.js' />
          <NavTab className='nav-tab nav-tab_techs' href="https://github.com/mongodb/mongo"  target="_blank" text='mongoDB' />
        </div>
      </div>
    </section>
  )
}

export default Techs;
