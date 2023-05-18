import { connect } from "react-redux";
import Users from "./Users";
import React from "react";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/preloader";
import { selectCurrentPage, selectFollowingInProgress, selectIsFetching, selectPageSize, selectTotalUsersCount, selectUsers } from "../../redux/users-selectors";
class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber) => {
        const pageSize = this.props
        this.props.getUsers(pageNumber, pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ?
                <Preloader />
                : null};
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow} followingInProgress={this.props.followingInProgress} />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: selectUsers(state),
        pageSize: selectPageSize(state),
        totalUsersCount: selectTotalUsersCount(state),
        currentPage: selectCurrentPage(state),
        isFetching: selectIsFetching(state),
        followingInProgress: selectFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})(UsersContainer);