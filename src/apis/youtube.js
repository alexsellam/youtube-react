import axios from 'axios';
const KEY = 'AIzaSyBeciJM7Bkvtnlk_s1ugvQoD4PcPzXveWk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});