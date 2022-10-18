import profileReducer, {addNewPostActionCreator, deletePostActionCreater} from "./profile-reducer";

let state = {
    posts:[
        {id: 1, posts: 'Hi, how are you?', likesCount: 20},
        {id: 2, posts: "I'ts my first post", likesCount: 25},
        ],
}

test('length of post should be incremented', () => {

    let action = addNewPostActionCreator("This is new post");
    
    let newState = profileReducer(state, action); 

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].posts).toBe("This is new post");
  });

test('text of post should by correct', () => {

    let action = addNewPostActionCreator("This is new post");
    
    let newState = profileReducer(state, action); 

    expect(newState.posts[2].posts).toBe("This is new post");
  });

  test('delete post', () => {

    let action = deletePostActionCreater(1);
    
    let newState = profileReducer(state, action); 

    expect(newState.posts.length).toBe(1);
  });