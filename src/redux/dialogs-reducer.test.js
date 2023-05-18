import dialogsReducer, { sendMessage } from './dialogs-reducer';


test('new message should be added', () => {
    let action = sendMessage("Hello!");
    let state = {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'Hey' },
            { id: 4, message: 'Whatsup' },
            { id: 5, message: 'Privit' },
            { id: 6, message: 'QQ' }
        ],
    };
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(7);
  });