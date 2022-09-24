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
        // let nextMessage = {id: 4, message: state.newMessageText};
        let nextMessage = state.newMessageText;
        return {
            ...state, messages: [...state.messages, {id: 4, message: nextMessage}], newMessageText: '' 
        }        

        // let copyState = {...state};
        // copyState.dialogs = [...state.dialogs];
        // copyState.messages = [...state.messages];
        // copyState.messages.push(nextMessage);
        // copyState.newMessageText = '';
        // return copyState;

    case UPDATE_NEW_MESSAGE:
        return {
            ...state, newMessageText: action.newMessage
        }
    //     let copyState = {...state};
    //     copyState.newMessageText = action.newMessage;
    //    return copyState;
    
    default: return state;   

    }
}

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessage: text});

export default dialogsReducer;