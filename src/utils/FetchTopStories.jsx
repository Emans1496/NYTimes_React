import axios from 'axios';
import localforage from 'localforage';



const fetchTopStories = async (section = 'home') => {
    const cacheKey = `topStories-${section}`;
    const apiKey='27o3LSgGKbZCdixS9imrr5T1scWoKeAG';
    const BASE_URL='https://api.nytimes.com/svc/topstories/v2';

    try {
        const cachedData = await localforage.getItem(cacheKey);
        if (cachedData) {
            console.log(`Fetching data for section ${section} from cache.`);
            return cachedData;
        }

        const response = await axios.get(`${BASE_URL}/${section}.json?api-key=${apiKey}`);
        const data = response.data.results;

        await localforage.setItem(cacheKey, data);
        console.log(`Fetching data for section ${section} from API.`);
        return data;
    } catch (error) {
        console.error('Errore nel recuperare le top stories:', error);
        return [];
    }
};

export default fetchTopStories;
