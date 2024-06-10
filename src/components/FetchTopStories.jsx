import axios from 'axios';

const API_KEY = 'ihUkyQpqYfbUiAR3WKaHjUMTNwtznpcO';
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchTopStories(section = 'home') {
    const delay = 1000;
    try {
        const response = await axios.get(`${BASE_URL}/${section}.json?api-key=${API_KEY}`);
        await sleep(2000); 
        return response.data.results;
    } catch (error) {
        console.error('Errore nel recuperare le top stories:', error);
        throw error;
    }
}
