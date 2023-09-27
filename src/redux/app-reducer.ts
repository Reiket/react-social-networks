// @ts-ignore
import { getLogin } from "./auth-reducer.ts";
import {Dispatch} from "redux";

const SET_INITIALIZED = 'SET_INITIALIZED';
export type InitialStateType = {
    initialized: boolean

}
let initialState: InitialStateType = {
    initialized: false, 
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case SET_INITIALIZED: 
            return {
                ...state, 
                initialized: true,
            };
        default: {
            return state;
        }
    }
}
type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED,
}
type ActionsType = InitializedSuccessActionType;

export const initializedSuccess = (): InitializedSuccessActionType => ({type: SET_INITIALIZED});

export const initializeApp = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        let promise = dispatch(getLogin());
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess()); 
        })
    }
}
export default appReducer;
