import { usersAPI } from "../api/api";

const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_NEW_POST = 'ADD-NEW-POST'; 
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
        posts:[
            {id: 1, posts: 'Hi, how are you?', likesCount: 20},
            {id: 2, posts: "I'ts my first post", likesCount: 25},
            ],
            newPostText: 'New post',
            profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){

        case UPDATE_NEW_POST:
            return {
                ...state, newPostText: action.textPost
            }
            
        case ADD_NEW_POST:
            let nextPost = {id: 3, posts: state.newPostText, likesCount: 17};    
            return {
                ...state, posts: [...state.posts, nextPost], newPostText: '',
            }

        case SET_USER_PROFILE:
                return {...state, profile: action.profile}    

        default: return state;    
        }
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST});
export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_POST, textPost: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => 
    (dispatch) => {
        usersAPI.getProfile(userId).then(data => {   
            dispatch(setUserProfile(data));
        });
}

export default profileReducer;