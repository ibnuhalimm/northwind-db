import axios from 'axios';
import API from '../constant/API';

class CustomerService {
    static getAllCustomers(page) {
        return axios.get(`${API.GET_CUSTOMERS}?order=company,asc&page=${page},10`)
            .then(response => {
                return Promise.resolve({
                    data: response.data.records,
                    total: response.data.results
                });
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }


    static getSingleCustomer(id) {
        return axios.get(`${API.GET_CUSTOMERS}/${id}`)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }


    static storeNewCustomer(data) {
        return axios.post(`${API.STORE_CUSTOMER}`, data)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }


    static updateCustomer(id, data) {
        return axios.put(`${API.STORE_CUSTOMER}/${id}`, data)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }
}

export default CustomerService;