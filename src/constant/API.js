const BASE_URL_API = process.env.REACT_APP_BASE_URL_API;

const API = {
    GET_CUSTOMERS: BASE_URL_API + '/records/customers',
    STORE_CUSTOMER: BASE_URL_API + '/records/customers'
};

export default API;