import s from './../Friends.module.css';
const FriendsItem = ({avatar, name}) => {
    return (
        <div className={s.friendsItem}>
            <img className={s.avatar} src={avatar} alt="Avatar" />
            <div className={s.name}>{name}</div>
        </div>
    );
}

export default FriendsItem;