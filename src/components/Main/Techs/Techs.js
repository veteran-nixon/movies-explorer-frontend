import NavTab from "../NavTab/NavTab";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__heading">Технологии</h2>
      <div className="techs__container">
        <h3 className="techs__nav-heading">7 технологий</h3>
        <p className="techs__nav-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__nav-table">
          <NavTab className='nav-tab nav-tab_techs' text='HTML' />
          <NavTab className='nav-tab nav-tab_techs' text='CSS' />
          <NavTab className='nav-tab nav-tab_techs' text='JS' />
          <NavTab className='nav-tab nav-tab_techs' text='React' />
          <NavTab className='nav-tab nav-tab_techs' text='Git' />
          <NavTab className='nav-tab nav-tab_techs' text='Express.js' />
          <NavTab className='nav-tab nav-tab_techs' text='mongoDB' />
        </div>
      </div>
    </section>
  )
}

export default Techs;
