import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './videoDetail';
import VideoList from './VideoList';

/* Este componente hace uso de un state que declara 2 propiedades,
por tanto el hook useState se usará 2 veces. Además usa el lifecycle
method componentDidMount, lo que significa que se debe usar el hook
useEffect. El componentDidMount solo se ejecuta 1 vez, cuando se
renderiza por primera vez el componente App en la pantalla, por eso
el segundo argumento de useEffect será un array vacío que cumpla con
la equivalencia */

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('cute cats');
    // Para que cuando cargue la app se muestre una búsqueda por defecto
  }, []); //Empty array: run the function only one time

  // Callback que se llamará cuando se vaya a realizar una búsqueda
  // El término (term) se pasa desde el componente hijo SearchBar
  // Asynchronous API request
  // Se debe usar una promesa o la sintáxis de Async Await
  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    console.log(response.data.items);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
    /* Seteamos selectedVideo también, para que cuando se realice una
    búsqueda, se muestre un video por defecto */
  };

  const onVideoSelect = (video) => {
    console.log('From the App!', video);
    setSelectedVideo(video);
    // Como se actualiza el State, se vuelve a renderizar el componente
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmitApp={onTermSubmit} />
      {/* <p>I have {videos.length} videos</p> */}
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              videos={videos}
              onVideoSelect={onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
