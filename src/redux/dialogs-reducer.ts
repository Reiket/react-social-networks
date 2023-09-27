import {type} from "@testing-library/user-event/dist/type";

const SEND_MESSAGE = 'SEND_MESSAGE';
type DialogType ={
    id: number,
    name: string,
    avatar: string,
}
type MessageType ={
    id: number,
    message: string,
}
let initialState  = {
    dialogs: [
        { id: 1, name: 'Ostap', avatar: 'https://www.blexar.com/avatar.png' },
        { id: 2, name: 'Xryst', avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000' },
        { id: 3, name: 'Dimon', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' },
        { id: 4, name: 'Makson', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/275/816/small_2x/cartoon-avatar-of-smiling-beard-man-profile-icon-vector.jpg' },
        { id: 5, name: 'Den', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/007/410/738/small/bearded-man-illustration-in-flat-cartoon-style-free-vector.jpg' },
        { id: 6, name: 'Vova', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/006/541/188/small/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg' },
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Hey' },
        { id: 4, message: 'Whatsup' },
        { id: 5, message: 'Privit' },
        { id: 6, message: 'QQ' }
    ] as Array<MessageType>,
}

export type InitialStateType = typeof  initialState

const dialogsReducer = (state = initialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: action.newMessageText, 
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state;
    }
}

type SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    newMessageText : string
}
 type ActionsType = SendMessageActionType;

export const sendMessage  = (newMessageText : string) : SendMessageActionType => ({ type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;