import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://7q0co4lj90.execute-api.ap-northeast-2.amazonaws.com/development/jindong-mt-app',
});

export default api;
