import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
const SET_USER_DATA = 'samurai/auth/SET_USER_DATA';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null,
    isCaptcha: false,
    //isFetching: false,  
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state, 
                ...action.data,
            };
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.profile,
            }    
        case SET_CAPTCHA:
            return {
                ...state,
                isCaptcha: action.isCaptcha,
            }    
        default: {
            return state;
        }
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const setProfileData = (profile) => ({type: SET_PROFILE_DATA, profile});
export const setCaptcha = (isCaptcha) => ({type: SET_CAPTCHA, isCaptcha, captcha});

export const getLogin= () => {
    return async (dispatch) => {
        let data = await authAPI.checkAuth()
        if(data.resultCode === 0) {
            let {id, email, login} =  data.data;
            dispatch(setUserData(id, email, login, true));
        }
    }
}
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch(getLogin());
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    }
}
export const captcha = (captcha) => {
    return(dispatch) => {
        authAPI.captcha(captcha).then(data=> {
            dispatch(setCaptcha(data));
        })
    }
}
export const logout= () => {
    return async (dispatch) => {
        let data = await authAPI.logout()
        if(data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    }
}





// export const getLoginAvatar= () => {
//     return (dispatch) => {
//         profileAPI.getProfileImg().then(data => { 
//             if(data.userid != null) {
//                 dispatch(setProfileData(data));
//             }
//         });
//     }
// }
export default authReducer;

