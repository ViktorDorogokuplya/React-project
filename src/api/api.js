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

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('immage', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        });
    }, 
    saveProfile(profile) {
         
        return instance.put(`profile`, profile );
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },

    login (email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },

    logout () {
        return instance.delete(`auth/login`)
    },
}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
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