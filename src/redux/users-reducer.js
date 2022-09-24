const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'; 
const SET_USERS = 'SET-USERS';

let initialState = {
       users:[
            {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: false, fullName: 'Viktor', status: 'I am a boss' , location: {city:'Vilnyansk', country: 'Ukraine'}},
            {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: true, fullName: 'Olga', status: 'I am a titcher' , location: {city:'Zaporizhzhia', country: 'Ukraine'}},
            {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: false, fullName: 'Rostik', status: 'I am a junior' , location: {city:'Bonn', country: 'Germany'}},
            {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: true, fullName: 'Alina', status: 'I am a student' , location: {city:'San-Trope', country: 'France'}},
            ],
}

const usersReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                })
            }

         case SET_USERS: 
         return{
            ...state, users: [...state.users, ...action.users]
         }
        default: return state;    
        }
}

export const followAC = (userId) => ({ type: FOLLOW, userId});
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId});
export const setUserAC = (users) => ({type: SET_USERS, users})

export default usersReducer;