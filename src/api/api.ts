import { ProfileType, UserType } from './../typs/typs';
import  axios from "axios";
import {UsersType} from "../typs/typs"

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "e3194a7d-4c39-4790-a559-44e7a0f2c523"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',    

})

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodECaptchaEnum
    messages: Array<string>
}

type LogoutResponseType = {
    data: null
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodECaptchaEnum {
    CaptchaIsRequired = 10
}

export const authAPI = {
    me () {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },

    login (email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
    },

    logout () {
        return instance.delete<LogoutResponseType>(`auth/login`).then(res => res.data)
    },
}

// type GetCaptchaUrlType = {}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`).then(res => res.data)
    }
}

type GetUsersType = {
    items: Array<UsersType>
    totalCount: number | 30,
    error: null
} 

type UserFollowUnfollwType = {
    userId : number
}

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },

    userFollow (userId: number) {
        return instance.delete<UserFollowUnfollwType>(`follow/${userId}`).then(res => res.data)
    },

    userUnFollow (userId: number) {
        return instance.post<UserFollowUnfollwType>(`follow/${userId}`, {}).then(res => res.data)
    },
}

export const profileAPI = {
    getProfile (userId: number) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
  
    updateStatus(status: string) {
        return (
            instance.put(`profile/status`, { status })
        )
    },

    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('immage', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        });
    }, 
    saveProfile(profile: ProfileType) {
         
        return instance.put(`profile`, profile );
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