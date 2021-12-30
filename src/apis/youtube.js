import axios from 'axios';

const KEY = 'AIzaSyDJz_MNKfsLhwFkdZ95NXxwXYg-JQlLP_U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
