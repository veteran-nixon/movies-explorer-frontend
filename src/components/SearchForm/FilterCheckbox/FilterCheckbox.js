import React from "react";

function FilterCheckbox() {
  const [active, setIsActive] = React.useState(false);

  function handleClick(event) {
    event.preventDefault()
    if(!active) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const classNameCheckBox = (`${active ? 'filter-checkbox filter-checkbox_active' : 'filter-checkbox'}`);

  return (
    <div className="filter">
      <button type="submit" onClick={handleClick} className={classNameCheckBox} aria-label="short-duration" />
      <p className="filter-checkbox__note">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;

