import s from './../Friends.module.css';
const FriendsItem = (props) => {
    return (
        <div className={s.friendsItem}>
            <img className={s.avatar} src={props.avatar} alt="" />
            <div className={s.name}>{props.name}</div>
        </div>
    );
}

export default FriendsItem;