import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    return (
        <div className='profile-content'>
            <ProfileInfo profile = {props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <div></div>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;