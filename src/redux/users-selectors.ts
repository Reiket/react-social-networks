import {AppStateType} from "~/src/redux/redux-store";

export const selectUsers = (state: AppStateType) => {
    return state.usersPage.users;
}

export const selectPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}
export const selectTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}
export const selectCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
}
export const selectIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
}
export const selectFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
}

