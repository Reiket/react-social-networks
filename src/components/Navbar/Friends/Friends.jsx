import s from './Friends.module.css';
import FriendsItem from './Friendsitem/FriendsItem';
const Friends = (props) => {
    let FriendsElement = props.friends.map((item) => <FriendsItem name={item.name} id={item.id} avatar={item.avatar}></FriendsItem>)
    return (
        <div className={s.friends}>
            <h2 className={s.title}>Friends</h2>
            <div className={s.body}>
                {FriendsElement}
            </div>
        </div>
    );
}

export default Friends;
