import {AppStateType} from "~/src/redux/redux-store";

export const selectIsAuth = (state: AppStateType) => {
    return state.auth.isAuth;
}

export const selectLogin = (state: AppStateType) => {
    return state.auth.login;
}


export const selectUserId = (state: AppStateType) => {
    return state.auth.userId;
}