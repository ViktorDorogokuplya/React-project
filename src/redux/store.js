
import profileReducer  from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
    _state: {

        postsPage : {
            posts:[
                {id: 1, posts: 'Hi, how are you?', likesCount: 20},
                {id: 2, posts: "I'ts my first post", likesCount: 25},
                ],

                newPostText: 'New post',
             },
 
        dialogsPage : {
            dialogs: [
                {id: 1, name: 'Viktor'},
                {id: 2, name: 'Olga'},
                {id: 3, name: 'Alina'},
                {id: 4, name: 'Rostislav'},
            ],
            messages : [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: "I'm here!"},
            ],
            newMessageText : 'New message',
        }   
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.postsPage = profileReducer(this._state.postsPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    } 
}

 export default store;
window.store = store;