import axios from "axios";
import {ProfileType} from "~/src/types/types";
import {type} from "@testing-library/user-event/dist/type";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1a01346e-3c27-4b6b-b031-968a8985e8c3"
    },
});
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    }
}
export const followAPI = {
    deleteFollow(id: number) {
        return instanse.delete(`follow/${id}`)
            .then(response => response.data);
    },
    postFollow(id: number) {
        return instanse.post(`follow/${id}`)
        .then(response => response.data);
    },
}
export const profileAPI = {
    getProfile(userId: number) {
        return instanse.get(`profile/${userId}`)
            .then(response=> response.data);
    },
    saveProfile(profile: ProfileType) {
        return instanse.put(`profile`, profile)
            .then(response=> response.data);
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response=> response.data);
    },
    getStatus(userId: number) {
        return instanse.get(`profile/status/` + userId)
            .then(response=> response.data);
    },
    updateStatus(status: string) {
        return instanse.put(`profile/status/`, {status})
            .then(response=> response.data);
    },
}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,

}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,

}
type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}

export const authAPI = {
    checkAuth() {
        return instanse.get<MeResponseType>(`auth/me`)
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instanse.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
        .then(response => response.data);
    },
    logout() {
        return instanse.delete(`auth/login`)
        .then(response => response.data);
    },
    captcha() {
        return instanse.get(`security/get-captcha-url`)
        .then(response => response.data);
    },
};
export const securityAPI = {
    getCaptchaUrl() {
        return instanse.get(`security/get-captcha-url`)
        .then(response => response.data);
    },
}