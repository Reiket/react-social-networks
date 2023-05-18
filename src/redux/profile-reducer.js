import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
let initialState = {
    posts: [
        { id: 1, message: 'Hi, How are you?', likesCount: 12 },
        { id: 2, message: 'Hello, Are you programmer?', likesCount: 10 },
    ],
    profile: null,
    status: "іі",
};
const profileReducer = (state = initialState, action) => {
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
        default: {
            return state;
        }
    }
}
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});


export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data));
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(data));

    }
}
export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if(data.resultCode === 0) {
            dispatch(setUserStatus(status));            
        }
    }
}
export default profileReducer;