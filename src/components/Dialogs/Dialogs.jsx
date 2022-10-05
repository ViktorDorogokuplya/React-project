import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    // let dialogsElements = props.data.dialogs.map((dialog, index) => <DialogItem name={dialog.name} key={index} id={dialog.id}/>)
    // let messagesElements = props.data.messages.map((message, index) => <Message message={message.message} key={index}/>)
    // debugger;
    let dialogsElements = props.dialogsPage.dialogs.map((dialog, index) => <DialogItem name={dialog.name} key={index} id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map((message, index) => <Message message={message.message} key={index}/>)

    let addMessage = () => {

        props.addMessage();
       
    }

    let onMessageText = (e) => {

        let text = e.target.value;
        props.updateNewMessage(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageText} placeholder='New text' value={props.dialogsPage.newMessageText}/>
                    <button onClick={addMessage} >Add message</button>
                </div>
            </div>
        </div>
    )
}



export default Dialogs;