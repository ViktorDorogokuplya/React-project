const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

type DialogsType = {
    id: number,
    name: string
}

type MessagesType = {
    id: number,
    message: string
}

let initialState = {
        dialogs: [
            {id: 1, name: 'Viktor'},
            {id: 2, name: 'Olga'},
            {id: 3, name: 'Alina'},
            {id: 4, name: 'Rostislav'},
        ] as Array<DialogsType>,
        messages : [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: "I'm here!"},
        ] as Array<MessagesType>,
        
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: AddNewMessageActionCreatorType): InitialStateType => {

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

type AddNewMessageActionCreatorType = {
    type: typeof ADD_NEW_MESSAGE,
    newMessageBody: string
}

export const addNewMessageActionCreator = (newMessageBody: string): AddNewMessageActionCreatorType => ({ type: ADD_NEW_MESSAGE, newMessageBody});


export default dialogsReducer;