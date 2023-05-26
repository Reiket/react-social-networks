import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    debugger;
    return (
        <div className='profile-content'>
            <ProfileInfo savePhoto={props.savePhoto} saveProfile={props.saveProfile} isOwner = {props.isOwner} profile = {props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <div></div>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;