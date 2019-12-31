import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a872e6c5cc15b4ff306bb5379e4103377b055adbfd9e5ddb3ee3ffa4c40b5df4'
    }
});