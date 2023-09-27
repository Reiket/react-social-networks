
export const selectProfile = (state) => {
    return state.profilePage.profile;
}
export const selectStatus = (state) => {
    return state.profilePage.status;
}

export const  selectPost = (state) => {
    return state.profilePage.posts;
}
export const  selectNewPostText = (state) => {
    return state.profilePage.newPostText;
}

