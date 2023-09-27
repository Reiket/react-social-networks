import { profileAPI } from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "~/src/redux/redux-store";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        { id: 1, message: 'Hi, How are you?', likesCount: 12 },
        { id: 2, message: 'Hello, Are you programmer?', likesCount: 10 },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "іі",
};
export type InitialStateType = typeof initialState;
const profileReducer = (state = initialState, action: ActionsType) : InitialStateType => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos } as ProfileType,
            };
        }
        default: {
            return state;
        }
    }
}

type AddPostActionType  = {
    type: typeof ADD_POST,
    newPostText: string
}
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType,
}
type SetUserStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

type SavePhotoSuccess = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}

type ActionsType = AddPostActionType | SetUserProfileActionType | SetUserStatusActionType | SavePhotoSuccess;
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status: string): SetUserStatusActionType => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccess => ({type: SAVE_PHOTO_SUCCESS, photos});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getUserProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data));
    }
}
export const getStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(data));

    }
}
export const updateUserStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.updateStatus(status)
            if(data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        } catch (err) {
            console.error((err));
        }
    }
}
export const savePhoto = (file: any): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)
        if(data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        let data = await profileAPI.saveProfile(profile)
        if(data.resultCode === 0) {
            if (userId) {
                dispatch(getUserProfile(userId))
            }
        } else {
            // @ts-ignore
            dispatch(stopSubmit("edit-profile", { "contacts":{"facebook": data.messages[0] }}));
            return Promise.reject(data.messages[0]);
        }
    }
}

export default profileReducer;

function posts(arrayLength: number): object[] {
    throw new Error("Function not implemented.");
}
