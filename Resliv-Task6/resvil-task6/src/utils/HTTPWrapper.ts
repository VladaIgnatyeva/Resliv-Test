import axios from 'axios';

const api = 'https://reqres.in/api';

export default class HTTPWrapper {

    post(url: string, data: any) {
        return axios.post(`${api}/${url}`, data);
    }

    get(url: string) {
        return axios.get(`${api}/${url}`)
    }

    put(url: string, data: any) {
        return axios.put(`${api}/${url}`, data)
    }

    patch(url: string, data: any) {
        return axios.patch(`${api}/${url}`, data)
    }

    delete(url: string, data: any) {
        return axios.delete(`${api}/${url}`, { data: data })
    }
}