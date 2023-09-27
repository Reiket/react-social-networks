import {authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "~/src/redux/redux-store";
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state, 
                ...action.data,
            };
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
type SetUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: SetUserDataActionPayloadType
}
type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    captchaUrl: string,
}
type ActionsType = SetUserDataActionType | GetCaptchaUrlSuccessActionType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const  getCaptchaUrlSuccess= (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl});

export const getLogin= (): ThunkType => {
    return async (dispatch) => {
        let {data, resultCode} = await authAPI.checkAuth()
        if(resultCode === ResultCodesEnum.Success) {
            let {id, email, login} =  data;
            dispatch(setUserData(id, email, login, true));
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
    return async (dispatch) => {
       if (!captcha) {
           let {data, resultCode, messages} = await authAPI.login(email, password, rememberMe, captcha);
           if (resultCode === ResultCodesEnum.Success) {
               dispatch(getLogin());
           }  else {
               if (resultCode === ResultCodeForCaptcha.CaptchaIsRequired ) {
                   dispatch(getCaptchaUrl())
               }
               let message = messages.length > 0 ? messages[0] : "Some error";
               // @ts-ignore
               dispatch(stopSubmit("login", { _error: message }));
           }
       }
    }
}
export const getCaptchaUrl = (): ThunkType => {
    return async (dispatch) => {
        let data =  await  securityAPI.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
}
export const logout= (): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.logout()
        if(data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    }
}


export default authReducer;

