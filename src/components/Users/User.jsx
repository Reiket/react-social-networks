import React from 'react';
import styles from './Users.module.css'
import avatarPhoto from '../../assets/images/avatar.jpg';
import { NavLink } from 'react-router-dom';
const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : avatarPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>UnFollow</button> : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    {/* <div>{u.location.city}</div>
                    <div>{u.location.country}</div> */}
                </span>
            </span>
        </div>
    );
}

export default User;
