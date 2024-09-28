import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.headers['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODA5NTc0MTViNTMzZDBmNjYwNTJiYWVmNzE4ZDEyYyIsIm5iZiI6MTcyNzU0OTU1My4zNzgzNjMsInN1YiI6IjVkNGMzOGY1NDgzMzNhMDAxMjFiNDBhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mIenLRV14tyH7UxFcmQnF8N5EnlmLrBLt-5Ge-WH1gQ';

export const fetchApi = async url => {
  const response = await axios.get(`${url}`);
  return response.data;
};
