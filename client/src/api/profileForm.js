import apiURL from '../../src/common/common.js'
const axios = require('axios');

export const loginFormData = (data) => {
    return axios
        .post( `${apiURL}/api/profileForm`, { data })
        .then(() => true)
        .catch(() => false)
};