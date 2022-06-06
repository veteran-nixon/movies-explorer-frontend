function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__heading">О проекте</h2>
      <div className="about-project__text-container">
        <div className="about-project__column">
          <h3 className="about-project__column-heading">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__column-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__column-heading">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__column-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__table">
        <div className="about-project__table-column">
          <p className="about-project__table-text about-project__table-text_theme_green">1 неделя</p>
          <p className="about-project__table-text">Back-end</p>
        </div>
        <div className="about-project__table-column about-project__table-column_long">
          <p className="about-project__table-text about-project__table-text_theme_grey">4 недели</p>
          <p className="about-project__table-text">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
