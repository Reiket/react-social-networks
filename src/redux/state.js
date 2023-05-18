
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, How are you?', likesCount: 12 },
                { id: 2, message: 'Hello, Are you programmer?', likesCount: 10 },
            ],
            newPostText: 'top',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Ostap', avatar: 'https://www.blexar.com/avatar.png' },
                { id: 2, name: 'Xryst', avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000' },
                { id: 3, name: 'Dimon', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' },
                { id: 4, name: 'Makson', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/275/816/small_2x/cartoon-avatar-of-smiling-beard-man-profile-icon-vector.jpg' },
                { id: 5, name: 'Den', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/007/410/738/small/bearded-man-illustration-in-flat-cartoon-style-free-vector.jpg' },
                { id: 6, name: 'Vova', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/006/541/188/small/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'Hey' },
                { id: 4, message: 'Whatsup' },
                { id: 5, message: 'Privit' },
                { id: 6, message: 'QQ' }
            ],
            newMessageText: 'q',
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Ostap', avatar: 'https://www.blexar.com/avatar.png' },
                { id: 2, name: 'Xryst', avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000' },
                { id: 3, name: 'Dimon', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' },
            ],
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;