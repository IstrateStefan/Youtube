import axios from 'axios';

const KEY = 'AIzaSyBK6mY_nSXmn_qHWRk_jxXoobaO3JAh5Ow';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});