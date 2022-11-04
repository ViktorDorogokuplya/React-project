import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'react';
// import { type } from 'os';
// import { initializeApp, initialazedSuccess } from './app-reducer';
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {

 switch(action.type) {

    case INITIALIZED_SUCCESS:
        return {...state, initialized: true,}    

    default: return state;    

 }
}

type InitialazedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}
type ActionsType = InitialazedSuccessType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const initialazedSuccess = (): InitialazedSuccessType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData() );
    Promise.all([promise]).then(() => {  
        dispatch(initialazedSuccess());
    })
  }

  export default appReducer;