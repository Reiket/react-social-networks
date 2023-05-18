import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
let Users = ({currentPage,totalUsersCount, pageSize,onPageChanged, users, followingInProgress, follow,unfollow, ...props}) => {
    return <div>
        <Paginator currentPage ={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {
            users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}/>)}
    </div>
}

export default Users;  