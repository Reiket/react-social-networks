import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = ({saveProfile, savePhoto, profile, status, updateUserStatus, isOwner}) => {
    debugger;
    return (
        <div className='profile-content'>
            <ProfileInfo savePhoto={savePhoto} saveProfile={saveProfile} isOwner = {isOwner} profile = {profile} status={status} updateUserStatus={updateUserStatus} />
            <div></div>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;