const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {

    case ADD_NEW_MESSAGE:
            
        let nextMessage = {id: 4, message: state.newMessageText}
        state.messages.push(nextMessage)
        state.newMessageText = '';
        return state;

    case UPDATE_NEW_MESSAGE:
        
       state.newMessageText = action.newMessage;
       return state;
    
    default: return state;   

    }
}

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessage: text});

export default dialogsReducer;