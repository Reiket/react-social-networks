import Preloader from '../../common/Preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    let contacts = props.profile.contacts;
    for (let key in contacts) {
        if (contacts[key] != null) {
            let div = document.createElement('div');
            div.innerHTML = `<a href = ${contacts[key]}>click</a>`;
            document.body.append(div);
        }
    }
    return (
        <div>
            <div className={s.profileContent__image}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            </div>
            <div>
                <img src={props.profile.photos.small} />
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJob ? "Search a work" : "Have a job"}</div>

            </div>
        </div>
    );
}

export default ProfileInfo;