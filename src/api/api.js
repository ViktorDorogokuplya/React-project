import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "e3194a7d-4c39-4790-a559-44e7a0f2c523"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',    

})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data)
    },

    userFollow (userId) {
        return instance.delete(`follow/${userId}`).then(responce => responce.data)
    },

    userUnFollow (userId) {
        return instance.post(`follow/${userId}`, {}).then(responce => responce.data)
    },
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId).then(responce => responce.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(responce => responce.data)
    },
  
    updateStatus(status) {
        return (
            instance.put(`profile/status`, { status }).then(response => (response.data))
        )
    },
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`).then(responce => responce.data)
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