import React from 'react';

class SearchBar extends React.Component {
  // Se convertirá el input de incontrolado a controlado,
  // con el fin de almacenar el término de búsqueda en el componente y no en el DOM

  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // calling the callback from parent component
    // Se le pasa al componente padre el término de búsqueda, para que lo conozca
    this.props.onFormSubmitApp(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
