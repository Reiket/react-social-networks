import Preloader from '../../common/Preloader/preloader';
import s from './ProfileInfo.module.css';
import React from "react";
import ProfileStatus from './ProfileStatus';
import avatarPhoto from '../../../assets/images/avatar.jpg';
import ProfileDataForm from "./ProfileDataForm";
const ProfileInfo = (props) => {
    const [editMode, setEditMode] = React.useState(false)
    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const goToEditMode =() => {
        setEditMode(prev => !prev)
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }
    return (
        <div>
            <div className={s.profileContent__image}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            </div>
            <div>
                <img src={props.profile.photos.small || avatarPhoto} />
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                {editMode ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={goToEditMode}/>}
            </div>
        </div>
    );
}

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div>}
        <div><b>Full name:</b> {props.profile.fullName}</div>
        <div><b>Loking for a job:</b> {props.profile.lookingForAJob ? "Search a work" : "Have a job"}</div>
        {props.profile.lookingForAJob &&
            <div><b>My professional skills:</b> {props.profile.lookingForAJobDescription}</div>
        }
        <div><b>About me:</b> {props.profile.aboutMe}</div>
        <div>
            <b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}



const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.Contacts}><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;