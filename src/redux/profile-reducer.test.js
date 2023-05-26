import profileReducer, { addPost } from "./profile-reducer";


test('new post should be added', () => {
    let action = addPost("Hello!");
    let state = {
        posts: [
            { id: 1, message: 'Hi, How are you?', likesCount: 12 },
            { id: 2, message: 'Hello, Are you programmer?', likesCount: 10 },
        ],
    };
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
  });
