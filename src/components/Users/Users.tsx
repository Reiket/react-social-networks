import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "~/src/types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void; // Оновлено тип, приймає userId
    follow: (userId: number) => void;
}
let Users: React.FC<PropsType> = ({currentPage,totalUsersCount, pageSize,onPageChanged, users, ...props}) => {
    return <div>
        <Paginator currentPage ={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {
            users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow}/>)}
    </div>
}

export default Users;  