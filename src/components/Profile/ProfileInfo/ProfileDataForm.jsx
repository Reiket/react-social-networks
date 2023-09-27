import React from "react";
import {Input, Textarea} from "../../common/FormsControls/FormsControl";
import {Field, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import style from "../../common/FormsControls/FormControl.module.css";


const ProfileDataForm = ({handleSubmit, error, profile, onSubmit, initialValues}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div><b>Full name:</b> {<Field validate={[]} placeholder={"Full-name"} name={"FullName"} component={Input}/>}</div>
        <div><b>Looking for a job:</b> {<Field validate={[]} name={"lookingForAJob"} component={Input} type={"checkbox"}/>}</div>
        <div><b>My professional skills:</b>{<Field validate={[]} placeholder={"My professional skills"} name={"lookingForAJobDescription"} component={Textarea}/>}</div>
        <div><b>About me:</b> {<Field validate={[]} placeholder={"About me"} name={"AboutMe"} component={Input}/>}</div>
        <div>
            <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {<Field validate={[]} placeholder={key} name={`contacts.${key}`} component={Input}/>}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({
    form:'edit-profile',
    enableReinitialize : true,
})(ProfileDataForm);
export default ProfileDataFormReduxForm;