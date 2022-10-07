import { profileAPI } from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST'; 
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

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

        default: return state;    
        }
}

export const addNewPostActionCreator = (newPostBody) => ({ type: ADD_NEW_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type:SET_USER_STATUS, status});

export const getUserProfile = (userId) => 
    (dispatch) => {
        profileAPI.getProfile(userId).then(data => {   
            dispatch(setUserProfile(data));
        });
}

export const getUserStatus = (userId) => 
    (dispatch) => {
        profileAPI.getStatus(userId).then(data => {  
            // debugger
            dispatch(setUserStatus(data));
        });
}

export const updateUserStatus = (status) => 
    (dispatch) => {
        profileAPI.updateStatus(status).then(data => {   
            if(data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
}

export default profileReducer;