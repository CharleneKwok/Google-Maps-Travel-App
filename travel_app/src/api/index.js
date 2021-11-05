import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const response = await axios.get(URL, {
            params: {
                // bottem left
                bl_latitude: sw.lat,
                // top right
                tr_latitude: ne.lat,
                bl_longitude: sw.lat,
                tr_longitude: ne.lng,
                // restaurant_tagcategory_standalone: '10591',
                // restaurant_tagcategory: '10591',
                // limit: '30',
                // currency: 'USD',
                // open_now: 'false',
                // lunit: 'km',
                // lang: 'en_US'
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'a5da9e2614msh4ff783e33e0d183p1ac95fjsned37eddfa900'
            }
        });
        return response.data.data;
    } catch(error) {
        console.log(error)
    }
}