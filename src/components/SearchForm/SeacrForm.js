import searchIcon from '../../images/search_icon.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';

function SearchForm(props) {
  const [ searchInput, setSearchInput ] = useState('');

  function handleChange(e) {
    setSearchInput(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearchMovie(searchInput);
  };

  function handleSubmitSaved(e) {
    e.preventDefault();
    props.handleSearchSavedMovie(searchInput);
  };

  useEffect(() => {
    setSearchInput(props.currentInputValue)
  }, []);

  return (
    <form onSubmit={props.savedMovie ? handleSubmitSaved : handleSubmit} className="search-form search-form_theme_nav-opened" name="search-form">
      <div className="search-form__input-container">
        <img className="search-form__image" src={searchIcon} alt="лупа" />
        <input value={searchInput || ''} onChange={handleChange} className="search-form__input" type="text" name="search" id="search-input" autoComplete="off" required placeholder='Поиск фильма по ключевому слову'/>
        <button type="submit" className="search-form__submit-button" aria-label="submit" id="search-form__submit-button" />
      </div>
      <div className="search-form__filter-container">
        <FilterCheckbox isShortMovie={props.isShortMovie} handleCLickShortMovie={props.handleCLickShortMovie} />
      </div>
    </form>
  )
}

export default SearchForm;
