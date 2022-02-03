import axios from 'axios';
import Router from "next/router";

// let url = "https://e6djdtoi97.execute-api.us-east-2.amazonaws.com/dev/";
let url = "https://web.cheapestessay.com/";

// api calling function
export const apiHelper = (api, method, data, headers) => {
    const apiUrl = url + api;
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: apiUrl,
            data: data,
            headers: headers
        })
            .then(res => resolve(res))
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token')
                    Router.push('/login');
                } else {
                    reject(error);
                }
            });
    });
}

// api calling function
export const ukApiHelper = (api, method, data, headers) => {
    const apiUrl = url + 'us/' + api;
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: apiUrl,
            data: data,
            headers: headers
        })
            .then(res => resolve(res))
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token')
                    Router.push('/login');
                } else {
                    reject(error);
                }
            });
    });
}

export const graphHelper = (query) => {
    const url = 'https://d15f713mur0dkt.cloudfront.net/graphql';
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data:  JSON.stringify(query)
        })
            .then(res => resolve(res))
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token')
                    Router.push('/login');
                } else {
                    reject(error);
                }
            });
    });
}