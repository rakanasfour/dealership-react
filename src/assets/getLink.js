import axios from 'axios';
const baseUrl = 'http://18.216.19.199:8081';
const baseUrlService = 'http://18.223.159.227:8083';

export const getCar = async() => {
    try {
        const {data} = await axios.get(baseUrl + "/api/getAllVehicles");
        return data;
    } catch (error) {
        throw error;
    }
}

export const getService = async() => {
    try {
        const {data} = await axios.get(baseUrlService + "/api/getAllServices");
        return data;
    } catch (error) {
        throw error;
    }
}