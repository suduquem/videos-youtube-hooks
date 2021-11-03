import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
    // Para que cuando cargue la app se muestre una búsqueda por defecto
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search]; // Convención de React, usada en useState
  //Convención usada en la comunidad JS:
  //return { videos, onTermSubmit }; // Objeto con propiedades videos y onTermsubmit
};

export default useVideos;
