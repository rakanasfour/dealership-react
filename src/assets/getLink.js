import axios from 'axios';
const baseUrl = 'http://localhost:8080';
export const getCar = async() => {
    try {
        const {data} = await axios.get(baseUrl + "/api/getAllCars");
        return data;
    } catch (error) {
        throw error;
    }
}