import axios from "axios";
import httpClient from "../http-common";

const SEARCH_API_BASE_URL="/train/findby";

class TrainServices{
    getTrains(){
        return axios.get(SEARCH_API_BASE_URL + '/');
    }
    getTrainById(destination){
        return axios.get(SEARCH_API_BASE_URL+ "/" + destination);
    }
}
    
export default new TrainServices();