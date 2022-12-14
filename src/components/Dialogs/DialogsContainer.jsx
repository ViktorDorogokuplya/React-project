// import React from "react";
import { connect } from "react-redux";
import { addNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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


// let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {

        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        addMessage: (newMessageBody) => {
            dispatch(addNewMessageActionCreator(newMessageBody));
        }
    }
}

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); 

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);