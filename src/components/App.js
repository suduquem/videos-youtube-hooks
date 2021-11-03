import React, { useState, useEffect } from 'react';
import useVideos from '../hooks/useVideos';
import SearchBar from './SearchBar';
import VideoDetail from './videoDetail';
import VideoList from './VideoList';

/* Aplica para el componente cuando no se usaba el hook useVideos: */
/* Este componente hace uso de un state que declara 2 propiedades,
por tanto el hook useState se usará 2 veces. Además usa el lifecycle
method componentDidMount, lo que significa que se debe usar el hook
useEffect. El componentDidMount solo se ejecuta 1 vez, cuando se
renderiza por primera vez el componente App en la pantalla, por eso
el segundo argumento de useEffect será un array vacío que cumpla con
la equivalencia */

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('cute cats');
  /* Al realizar la búsqueda con la función search, se actualizará un
  pedazo de state en el hook "setVideos(response.data.items);",
  y como App está usando el hook, App se volverá a renderizar */

  /* Se setea setSelectedVideo con el primer valor, para que cuando
  se realice una búsqueda, se muestre un video por defecto seleccionado
  de la lista que se tenga*/
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]); //Se ejecutará cada que haya una nueva lista de videos

  /* Siempre que se tiene una función de una sola línea de código, es
  bueno que esa línea se use in-line en donde se deba usar y no crear
  una función para ella -> se llama in-line function */
  /*   const onVideoSelect = (video) => {
        console.log('From the App!', video);
        setSelectedVideo(video);
        // Como se actualiza el State, se vuelve a renderizar el componente
  }; */

  return (
    <div className='ui container'>
      <SearchBar onFormSubmitApp={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              videos={videos}
              // se pasa el video al que se le dio click:
              onVideoSelect={setSelectedVideo} // Es equivalente a:
              // onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
