import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import {Field, reduxForm } from 'redux-form'
import { Textarea } from "../FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";


const Dialogs = (props) => {
   
    let dialogsElements = props.dialogsPage.dialogs.map((dialog, index) => <DialogItem name={dialog.name} key={index} id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map((message, index) => <Message message={message.message} key={index}/>)

    let addMessage = (values) => {

        props.addMessage(values.newMessageBody);
       
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addMessage}/>
        </div>
    )
}

const maxLenght50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
                <Field name={"newMessageBody"} component={Textarea}  placeholder="New text" validate={[required, maxLenght50]} />
                <button>Add message</button>
           </form>
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs;