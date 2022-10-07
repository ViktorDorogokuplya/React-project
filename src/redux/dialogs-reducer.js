const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

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
        
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {

    case ADD_NEW_MESSAGE:
        // let nextMessage = {id: 4, message: state.newMessageText};
        let nextMessage = action.newMessageBody;
        return {
            ...state, messages: [...state.messages, {id: 4, message: nextMessage}] 
        }        

        // let copyState = {...state};
        // copyState.dialogs = [...state.dialogs];
        // copyState.messages = [...state.messages];
        // copyState.messages.push(nextMessage);
        // copyState.newMessageText = '';
        // return copyState;

   
    default: return state;   

    }
}

export const addNewMessageActionCreator = (newMessageBody) => ({ type: ADD_NEW_MESSAGE, newMessageBody});


export default dialogsReducer;