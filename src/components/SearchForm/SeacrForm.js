import searchIcon from '../../images/search_icon.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className="search-form search-form_theme_nav-opened" name="search-form">
      <div className="search-form__input-container">
        <img className="search-form__image" src={searchIcon} alt="лупа" />
        <input className="search-form__input" type="text" name="search" id="search-input" autoComplete="off" required placeholder='Фильм'/>
        <button type="submit" className="search-form__submit-button" aria-label="submit" id="search-form__submit-button" />
      </div>
      <div className="search-form__filter-container">
        <FilterCheckbox />
      </div>
    </form>
  )
}

export default SearchForm;
