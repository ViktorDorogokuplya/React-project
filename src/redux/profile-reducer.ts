import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';
import { Dispatch } from 'react';
// import { InitialStateType } from './app-reducer';
import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import {PostsType, ProfileType, PhotosType} from "../typs/typs"

const ADD_NEW_POST = 'ADD-NEW-POST'; 
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE-POST';
const  SAVE_PHOTO_SUCCESS = ' SAVE-PHOTO-SUCCESS'


let initialState = {
        posts:[
            {id: 1, posts: 'Hi, how are you?', likesCount: 20},
            {id: 2, posts: "I'ts my first post", likesCount: 25},
            ] as Array <PostsType>,
        profile: null as ProfileType | null,
        status: '',
}

export type InitialStateType = typeof initialState
type ActionsType = AddNewPostActionCreatorType | SetUserProfileType | SetUserStatusType | DeletePostActionCreaterType | SavePhotoSuccessType
type DispathType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch(action.type){

        case ADD_NEW_POST:
            let nextPost = {id: 3, posts: action.newPostBody, likesCount: 17};    
            return {
                ...state, posts: [...state.posts, nextPost],
            }

        case SET_USER_PROFILE:
                return {...state, profile: action.profile} 
                
        case SET_USER_STATUS:
            return {...state, status: action.status}    
        
        case DELETE_POST: 
        return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

        case  SAVE_PHOTO_SUCCESS: 
        return { ...state, profile: {...state.profile, photos: action.photos} as ProfileType}

        default: return state;    
        }
}

type AddNewPostActionCreatorType = {
    newPostBody: string
    type: typeof ADD_NEW_POST
}
export const addNewPostActionCreator = (newPostBody: string): AddNewPostActionCreatorType => ({ type: ADD_NEW_POST, newPostBody});

type SetUserProfileType = {
    profile: ProfileType
    type: typeof SET_USER_PROFILE
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});

type SetUserStatusType = {
    status: string
    type: typeof SET_USER_STATUS
}
export const setUserStatus = (status: string): SetUserStatusType => ({type:SET_USER_STATUS, status});

type DeletePostActionCreaterType = {
    postId: number
    type: typeof DELETE_POST
}
export const deletePostActionCreater = (postId: number): DeletePostActionCreaterType => ({type: DELETE_POST, postId});

type SavePhotoSuccessType = {
    photos: PhotosType
    type: typeof SAVE_PHOTO_SUCCESS
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number): ThunkType => 
    async (dispatch: DispathType) => {
        let response = await profileAPI.getProfile(userId) 
            dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId: number): ThunkType => 
    async (dispatch: DispathType) => {
        let response = await profileAPI.getStatus(userId)  
            dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status: string): ThunkType => 
    async (dispatch: DispathType) => {
        let response = await profileAPI.updateStatus(status)  
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
}
export const savePhoto = (file: any): ThunkType => 
    async (dispatch: DispathType) => {
        let response = await profileAPI.savePhoto(file)  
            if(response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
}

export const saveProfile = (profile: ProfileType): ThunkType => 
    async (dispatch: any, getState: any) => {
        let userId = getState().auth.userId
        let response = await profileAPI.saveProfile(profile)  

        if(response.data.resultCode === 0) {
                 dispatch(getUserProfile(userId)); 
        } else {
            dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
            return Promise.reject(response.data.messages[0]);
        }
}

export default profileReducer;