import { AppStateType } from './redux-store';
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/helpers/object-helpers";
import { UserType } from "../typs/typs";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }

        case SET_USERS:
            return {
                ...state, users: action.users
            }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default: return state;
    }
}

type ActionsTypes = FollowSuccessType | UnfollowSuccessType | SetUsersType | SetCurrentPageType | SetTotalUsersCountType | TogleIsFetchingType | TogleFollowingInProgressType

type FollowSuccessType = { 
    type: typeof FOLLOW, 
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({ type: FOLLOW, userId });

type UnfollowSuccessType = {
    type: typeof UNFOLLOW, 
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({ type: UNFOLLOW, userId });

type SetUsersType = {
    type: typeof SET_USERS 
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({ type: SET_USERS, users });

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage });

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

type TogleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const togleIsFetching = (isFetching: boolean): TogleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching });

type TogleFollowingInProgressType = {
    type: typeof FOLLOWING_IN_PROGRESS 
    isFetching: boolean
    userId: number
}
export const togleFollowingInProgress = (isFetching: boolean, userId: number): TogleFollowingInProgressType => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId });

type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(togleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(togleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actoinCreator: (userId: number) => FollowSuccessType | UnfollowSuccessType) => {
    dispatch(togleFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actoinCreator(userId));
    }
    dispatch(togleFollowingInProgress(false, userId))

}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.userFollow
        // let actoinCreator = unfollowSuccess
        // dispatch(togleFollowingInProgress(true, userId))
        // let response = await usersAPI.userFollow(userId)  
        //     if(response.data.resultCode === 0) {
        //    dispatch(unfollowSuccess(userId));
        //     }
        //     dispatch(togleFollowingInProgress(false, userId))
        followUnfollowFlow(dispatch, userId, usersAPI.userFollow, unfollowSuccess)
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.userUnFollow
        // let actoinCreator = followSuccess
        // dispatch(togleFollowingInProgress(true, userId))
        // let response = await usersAPI.userUnFollow(userId)  
        //     if(response.data.resultCode === 0) {
        //    dispatch(followSuccess(userId));
        //     }
        //     dispatch(togleFollowingInProgress(false, userId))

        followUnfollowFlow(dispatch, userId, usersAPI.userUnFollow, followSuccess)

    }
}
export default usersReducer;