import React from "react";
import style from "./Users.module.css";
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';

const User = (props) => {

let user = props.user

    return <div>
            <span>
                <div>
                    <NavLink to={'./../profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.usersPhoto} alt='#'/>
                    </NavLink>
                </div>
                <div>
                    {user.followed 
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                    props.follow(user.id);
                    }}>Unofllow</button> 
                        
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.unfollow(user.id);

                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <div>{user.id}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
}



export default User;