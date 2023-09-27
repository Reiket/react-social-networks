import { connect } from "react-redux";
import Users from "./Users";
import React from "react";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/preloader";
import { selectCurrentPage, selectFollowingInProgress, selectIsFetching, selectPageSize, selectTotalUsersCount, selectUsers } from "../../redux/users-selectors";
import { UserType } from "~/src/types/types";
import { AppStateType } from "~/src/redux/redux-store";
type OwnPropsType = {

}
type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType
class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: selectUsers(state),
        pageSize: selectPageSize(state),
        totalUsersCount: selectTotalUsersCount(state),
        currentPage: selectCurrentPage(state),
        isFetching: selectIsFetching(state),
        followingInProgress: selectFollowingInProgress(state),
    };
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { follow, unfollow, getUsers })(UsersContainer);
