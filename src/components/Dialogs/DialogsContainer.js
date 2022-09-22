// import React from "react";
import { connect } from "react-redux";
import { addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
    
//     let state = props.store.store.dialogsPage;

//     let onAddMessage = () => {

//         props.store.dispatch(addNewMessageActionCreator());
       
//     }

//     let onMessageText = (text) => {
        
//         let action = updateNewMessageActionCreator(text);
//         props.store.dispatch(action);
//     }

//     return <Dialogs updateNewMessage={onMessageText} addMessage={onAddMessage} data={state}/>
// }

let mapStateToProps = (state) => {
    return {

        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
        addMessage: () => {
            dispatch(addNewMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); 



export default DialogsContainer;