import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import { addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
   
    let dialogsElements = props.data.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.data.messages.map(message => <Message message={message.message}/>)

    // let newMessage = React.createRef();
    
    let addMessage = () => {

        props.dispatch(addNewMessageActionCreator());
       
    }

    let onMessageText = (e) => {
        
        // let text = newMessage.current.value;
        // ref={newMessage}
        let text = e.target.value;
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageText} placeholder='New text' value={props.data.newMessageText}/>
                    <button onClick={addMessage} >Add message</button>
                </div>
            </div>
        </div>
    )
}



export default Dialogs;