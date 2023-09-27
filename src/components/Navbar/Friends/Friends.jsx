import s from './Friends.module.css';
import FriendsItem from './Friendsitem/FriendsItem';
const Friends = ({friends}) => {
    return (
        <div className={s.friends}>
            <h2 className={s.title}>Friends</h2>
            <div className={s.body}>
                {friends.map((item, index) => <FriendsItem key={index} name={item.name} avatar={item.avatar}></FriendsItem>)}
            </div>
        </div>
    );
}

export default Friends;
