import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: process.env.API_KEY,
        type: 'video',
    }
})
