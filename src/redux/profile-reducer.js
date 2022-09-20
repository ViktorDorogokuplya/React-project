const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_NEW_POST = 'ADD-NEW-POST'; 

let initialState = {
        posts:[
            {id: 1, posts: 'Hi, how are you?', likesCount: 20},
            {id: 2, posts: "I'ts my first post", likesCount: 25},
            ],

            newPostText: 'New post',
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){

        case UPDATE_NEW_POST:
            
            state.newPostText = action.textPost;
            return state;

        case ADD_NEW_POST:
            
            let nextPost = {id: 3, posts: state.newPostText, likesCount: 17}
            state.posts.push(nextPost);
            state.newPostText = '';
            return state;

        default: return state;    
        }
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST});
export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_POST, textPost: text});

export default profileReducer;