import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "9b6262c3-bc36-4f87-bbda-187c4fca2fdc"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',    

})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    userFollow (userId) {
        return instance.delete(`follow/${userId}`).then(responce => responce.data)
    },

    userUnFollow (userId) {
        return instance.post(`follow/${userId}`, {}).then(responce => responce.data)
    }
}

// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
// }

// export const userFollow = (userId) => {
//     return instance.delete(`follow/${userId}`).then(responce => responce.data)
// }

// export const userUnFollow = (userId) => {
//     return instance.delete(`follow/${userId}`, {}).then(responce => responce.data)
// }