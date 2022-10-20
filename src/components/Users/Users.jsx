import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
console.log(props);
    return <div>
          <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged}/>
        {props.users.map((user, index) => <User key={index} user = {user} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow}  />)
}
</div>  
}

export default Users;