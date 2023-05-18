let initialState = {
    friends: [
        { id: 1, name: 'Ostap', avatar: 'https://www.blexar.com/avatar.png' },
        { id: 2, name: 'Xryst', avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000' },
        { id: 3, name: 'Dimon', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' },
    ],
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer;