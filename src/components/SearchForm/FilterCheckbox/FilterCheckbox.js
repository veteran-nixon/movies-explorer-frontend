function FilterCheckbox(props) {

  function handleClick() {
    props.handleCLickShortMovie()
  }

  const classNameCheckBox = (`${props.isShortMovie ? 'filter-checkbox filter-checkbox_active' : 'filter-checkbox'}`);

  return (
    <div className="filter">
      <button type="button" onClick={handleClick} className={classNameCheckBox} aria-label="short-duration" />
      <p className="filter-checkbox__note">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
