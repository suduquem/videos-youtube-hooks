import axios from 'axios';

const KEY = 'AIzaSyCG2N1Je9idM5KuvM0xVr1fJPya7HfhRhA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  // Los parámetros vienen de la documentación
  // https://developers.google.com/youtube/v3/docs/search/list
  params: { part: 'snippet', type: 'video', maxResults: 5, key: KEY },
});
