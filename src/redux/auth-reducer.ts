import { Dispatch } from 'react';
// import { type } from 'os';
// import { setAuthUserData, getAuthUserData, getCaptchaUrl } from './auth-reducer';
import { stopSubmit } from "redux-form";
import {authAPI, ResultCodesEnum, ResultCodECaptchaEnum, securityAPI} from "../api/api"
import { AppStateType } from './redux-store';
import { ThunkAction } from "redux-thunk";


const SET_USER_DATA = 'SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS'

export type InitialStateType = {
    userId: number | null,
    email: string | null, 
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState: InitialStateType = {
    userId: null,
    email: null, 
    login: null,
    isAuth: false,
    captchaUrl: null
}

type ActionsType = SetAuthUserDataType | GetCaptchaUrlSuccessType 

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

 switch(action.type) {

    case SET_USER_DATA:
    case  GET_CAPTCHA_URL_SUCCESS:    
        return {...state, ...action.payload} 

    default: return state;    
 }
}

type SetAuthUserDataTypePayload = {
    userId: number | null, 
    email: string | null, 
    login: string | null, 
    isAuth: boolean
} 
type SetAuthUserDataType = {
    type: typeof SET_USER_DATA, 
    payload: SetAuthUserDataTypePayload
}
export const setAuthUserData = ( userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getAuthUserData = (): ThunkType=>
    async (dispatch: DispatchType) => {
        let response = await authAPI.me() 
            if (response.resultCode === ResultCodesEnum.Success) {
                let {id, login, email} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
    }

export const login = (email: string, password: string, rememberMe: boolean, captcha: null): ThunkType => 
    async (dispatch: any) => {
        
    let response = await authAPI.login(email, password, rememberMe, captcha)
         
    if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(getAuthUserData());
            } else {

                if(response.resultCode === ResultCodECaptchaEnum.CaptchaIsRequired) {
                    dispatch(getCaptchaUrl())
                }

                let message = response.messages.length > 0 ? response.messages[0] : "Somme error"
                dispatch(stopSubmit('login', {_error: message}))
            }
    }

export const getCaptchaUrl = (): ThunkType => 
    async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.url 
    dispatch(getCaptchaUrlSuccess(captchaUrl));
     }    


export const logout = (): ThunkType => 
   async (dispatch) => {
    let response = await authAPI.logout()
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(setAuthUserData(null, null, null, false));
            }
    }


export default authReducer;