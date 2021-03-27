import axios from 'axios';
const KEY = 'AIzaSyBLF4iEDjnWFmKrhEtIetO5qRT2aKQqO4o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY,
        type: 'video',
    }
})
