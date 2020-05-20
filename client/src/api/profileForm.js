import { apiURL } from '../../src/common/common.js'


export const loginFormData = (data) => fetch(apiURL, {
    method: 'POST',
    headers: 'Content-Type',
    body: JSON.stringify(data)
});