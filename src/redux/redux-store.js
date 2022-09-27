import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    postsPage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage : usersReducer,
})

let store = createStore(reducers);

export default store;
