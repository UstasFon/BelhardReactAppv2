import apiURL from '../../src/common/common.js'


export const loginFormData = fetch(`${apiURL}/api/profileForm`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type'},

})
// {
//     return axios
//         .post( `${apiURL}/api/profileForm`, { data })
//         .then(() => true)
//         .catch(() => false)
// };