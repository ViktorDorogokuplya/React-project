import React from "react";
import style from "./Users.module.css";
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import * as axios from "axios";



const Users = (props) => {
    
    

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    pages = pages.slice(0, 10);

    return <div>
            <div>
                {pages.map(page => {
                return <span className={props.currentPage === page && style.selectedPage} onClick={(e) =>{props.onPageChanged(page)}}>{page + ' '}</span>})}
            </div>
        {
        props.users.map((user, index) => <div key={index} >
        <span>
            <div>
                <NavLink to={'./../profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.usersPhoto} alt='#'/>
                </NavLink>
            </div>
            <div>
                {user.followed 
                ? <button onClick={() => {

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {withCredentials: true, headers: {
                        "API-KEY": "9b6262c3-bc36-4f87-bbda-187c4fca2fdc"
                    }})
                    .then(response =>{  
                        if(response.data.resultCode === 0) {
                            props.unfollow(user.id);

                        }
                    });
                    
                }}>Unofllow</button> 
                    
                : <button onClick={() => {
                    
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {withCredentials: true, headers: {
                        "API-KEY": "9b6262c3-bc36-4f87-bbda-187c4fca2fdc"
                    }})
                    .then(response =>{  
                        if(response.data.resultCode === 0) {
                            props.follow(user.id);
                        
                        }
                    });
                    
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
        </div>)
}
</div>
    
    
}

export default Users;