import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControl';
import { maxLengthCreator, requiredField } from '../../utils/validators/validator';
const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar= {d.avatar} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let onAddMessage = (values) => {
        props.sendMessage(values.newMassageBody);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageReduxForm onSubmit={onAddMessage}/>
                </div>
            </div>
        </div>
    )
}

const addMessageForm = (props) => {
    const maxLength100 = maxLengthCreator(100);
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField, maxLength100]} component={Textarea} placeholder='Enter your message' name='newMassageBody'/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({
    form: 'addNewMessage'
})(addMessageForm);
export default Dialogs;