import React, { useState } from 'react';
/* Este componente solo tiene state, por tanto solo se requiere
el useState hook */

const SearchBar = ({ onFormSubmitApp }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    // calling the callback from parent component
    /* Se le pasa al componente padre el término de búsqueda,
    para que lo conozca */
    onFormSubmitApp(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input
            type='text'
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
