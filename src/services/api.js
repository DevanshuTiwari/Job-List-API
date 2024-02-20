import axios from "axios";

const API_URL = "http://ec2-54-167-96-20.compute-1.amazonaws.com:8000";

export const saveData = async(data) => {
    try{
       const response = await axios.post(`${API_URL}/save`, data); 
       return response.data;
    } catch(error){
        console.error('Error while calling save data api', error.message);
        return error.response.data;
    }
}

export const getData = async() => {
    try{
       const response = await axios.get(`${API_URL}/get`); 
       return response.data;
    } catch(error){
        console.error('Error while calling get data api', error.message);
        return error.response.data;
    }

}