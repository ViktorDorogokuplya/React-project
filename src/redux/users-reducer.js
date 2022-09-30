const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'; 
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
       users:[
            // {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: false, fullName: 'Viktor', status: 'I am a boss' , location: {city:'Vilnyansk', country: 'Ukraine'}},
            // {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: true, fullName: 'Olga', status: 'I am a titcher' , location: {city:'Zaporizhzhia', country: 'Ukraine'}},
            // {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: false, fullName: 'Rostik', status: 'I am a junior' , location: {city:'Bonn', country: 'Germany'}},
            // {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: true, fullName: 'Alina', status: 'I am a student' , location: {city:'San-Trope', country: 'France'}},
            ],
       pageSize: 20,
       totalUsersCount: 0,
       currentPage: 1,    
       isFetching: false, 
}

const usersReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        
                    
                    return {...user,followed: true};
                    }
                    
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        
                   
                    return {...user,followed: false};
                    }
                    return user;
                })

            }

         case SET_USERS: 
         return{
            ...state, users: action.users}

         case SET_CURRENT_PAGE: 
            return{...state, currentPage: action.currentPage}

         case SET_TOTAL_USERS_COUNT: 
         return{...state, totalUsersCount: action.count}  
         
         case TOGGLE_IS_FETCHING: 
            return{...state, isFetching: action.isFetching}

        default: return state;    
        }
}

export const follow = (userId) => ({ type: FOLLOW, userId});
export const unfollow = (userId) => ({ type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const togleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;