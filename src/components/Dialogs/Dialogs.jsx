import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControl';
import { maxLengthCreator, requiredField } from '../../utils/validators/validator';
const Dialogs = ({dialogsPage, sendMessage}) => {
    let onAddMessage = (values) => {
        sendMessage(values.newMassageBody);
        values.newMassageBody = '';
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar= {d.avatar} />)}
            </div>
            <div className={s.messages}>
                <div>{dialogsPage.messages.map((m, index) => <Message key={index} message={m.message} />)}</div>
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