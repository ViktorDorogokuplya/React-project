import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST'; 
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE-POST';
const  SAVE_PHOTO_SUCCESS = ' SAVE-PHOTO-SUCCESS'

let initialState = {
        posts:[
            {id: 1, posts: 'Hi, how are you?', likesCount: 20},
            {id: 2, posts: "I'ts my first post", likesCount: 25},
            ],
            profile: null,
            status: '',
}

const profileReducer = (state = initialState, action) => {

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
        return { ...state, profile: {...state.profile, photos: action.photos}}

        default: return state;    
        }
}

export const addNewPostActionCreator = (newPostBody) => ({ type: ADD_NEW_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type:SET_USER_STATUS, status});
export const deletePostActionCreater = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => 
    async (dispatch) => {
        let response = await profileAPI.getProfile(userId) 
            dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => 
    async (dispatch) => {
        let response = await profileAPI.getStatus(userId)  
            dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => 
    async (dispatch) => {
        let response = await profileAPI.updateStatus(status)  
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status.data));
            }
}
export const savePhoto = (file) => 
    async (dispatch) => {
        let response = await profileAPI.savePhoto(file)  
            if(response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
}

export const saveProfile = (profile) => 
    async (dispatch, getState) => {
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