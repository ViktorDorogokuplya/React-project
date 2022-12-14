import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    postsPage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage : usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

type RootReducersType = typeof reducers
export type AppStateType = ReturnType<RootReducersType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.store = store;

export default store;

