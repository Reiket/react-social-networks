import { stopSubmit } from "redux-form";
import {authAPI, securityAPI} from "../api/api";
const SET_USER_DATA = 'samurai/auth/SET_USER_DATA';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null,
    captchaUrl: null,
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
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }    
        default: {
            return state;
        }
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const setProfileData = (profile) => ({type: SET_PROFILE_DATA, profile});
export const  getCaptchaUrlSuccess= (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl});

export const getLogin= () => {
    return async (dispatch) => {
        let data = await authAPI.checkAuth()
        if(data.resultCode === 0) {
            let {id, email, login} =  data.data;
            dispatch(setUserData(id, email, login, true));
        }
    }
}
export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === 0) {
            dispatch(getLogin());
        }  else {
                if (data.resultCode === 10 ) {
                    dispatch(getCaptchaUrl())
                }
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    }
}
export const getCaptchaUrl = () => {
    return async (dispatch) => {
        let data =  await  securityAPI.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
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

