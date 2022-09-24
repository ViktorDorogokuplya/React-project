import React from "react";
import style from "./Users.module.css";
import * as axios from 'axios';

const Users = (props) => {

    if (props.users.length === 0) {

        // axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        //     props.setUsers();
        // });

        props.setUsers([
            {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: false, fullName: 'Viktor', status: 'I am a boss' , location: {city:'Vilnyansk', country: 'Ukraine'}},
            {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: true, fullName: 'Olga', status: 'I am a titcher' , location: {city:'Zaporizhzhia', country: 'Ukraine'}},
            {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: false, fullName: 'Rostik', status: 'I am a junior' , location: {city:'Bonn', country: 'Germany'}},
            {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshCzF4y8FvoZylDseQPhytMi7k5UGZWafllKbvPK7&s', followed: true, fullName: 'Alina', status: 'I am a student' , location: {city:'San-Trope', country: 'France'}},
        ])
    }
   
    return <div>
        {
    props.users.map(user => <div key={user.id} >
        <span>
            <div>
                <img src={user.photoUrl} className={style.usersPhoto} alt='#'/>
            </div>
            <div>
                {user.followed 
                ? <button onClick={() => {props.follow(user.id)}}>Unofllow</button> 
                : <button onClick={() => {props.unfollow(user.id)}}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
            </span>
        </span>
        </div>)
}
</div>
}

export default Users;