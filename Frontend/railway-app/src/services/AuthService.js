import axios from 'axios'

import httpClient from "../http-common";

const API_URL = "/user/auth/";

class AuthService{
    
    signup(userName, password, email, phone) {
        return axios.post(API_URL +"signup", {
            userName,
            password,
            email,
            phone
           
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('User'));
    }
}

export default new AuthService();