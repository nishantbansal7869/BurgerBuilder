import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-eda0f.firebaseio.com/',
});

export default instance;