import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './videoDetail';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('cute cats');
    // Para que cuando cargue la app se muestre una búsqueda por defecto
  }

  // Callback que se llamará cuando se vaya a realizar una búsqueda
  // El término (term) se pasa desde el componente hijo SearchBar
  // Asynchronous API request
  // Se debe usar una promesa o la sintáxis de Async Await
  // onTermSubmit = (term) => {
  //   console.log('término de SearchBar en App', term);
  //   youtube.get('/search', { params: { q: term } });
  // };
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', { params: { q: term } });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    // Seteamos selectedVideo también,
    // para que cuando se realice una búsqueda, se muestre un video por defecto
  };

  onVideoSelect = (video) => {
    console.log('From the App!', video);
    this.setState({ selectedVideo: video });
    // Como se actualiza el State, se vuelve a renderizar el componente
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmitApp={this.onTermSubmit} />
        {/* <p>I have {this.state.videos.length} videos</p> */}
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
