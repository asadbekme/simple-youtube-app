import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '50c7934db0mshf89b4c85197af58p1bbc36jsnd379be141be8',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options)
    return response.data
  }
};