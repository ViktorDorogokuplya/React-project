import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "e3194a7d-4c39-4790-a559-44e7a0f2c523"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',    

})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    userFollow (userId) {
        return instance.delete(`follow/${userId}`)
    },

    userUnFollow (userId) {
        return instance.post(`follow/${userId}`, {})
    },
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
  
    updateStatus(status) {
        return (
            instance.put(`profile/status`, { status })
        )
    },
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },

    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout () {
        return instance.delete(`auth/login`)
    },
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