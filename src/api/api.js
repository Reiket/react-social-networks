import axios from "axios";

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
    deleteFollow(id) {
        return instanse.delete(`follow/${id}`)
            .then(response => response.data);
    },
    postFollow(id) {
        return instanse.post(`follow/${id}`)
        .then(response => response.data);
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`)
            .then(response=> response.data);
    },
    saveProfile(profile) {
        return instanse.put(`profile`, profile)
            .then(response=> response.data);
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response=> response.data);
    },
    // getProfileImg() {
    //     return instanse.get(`profile/10`)
    //         .then(response => response.data)
    // },
    getStatus(userId) {
        return instanse.get(`profile/status/` + userId)
            .then(response=> response.data);
    },
    updateStatus(status) {
        return instanse.put(`profile/status/`, {status})
            .then(response=> response.data);
    },
}

export const authAPI = {
    checkAuth() {
        return instanse.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instanse.post(`auth/login`, {email, password, rememberMe, captcha})
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