import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../typs/typs"

type UsersType = {
  currentPage: number 
  totalUsersCount: number 
  pageSize: number
  onPageChanged: (pageNumber: number) => void 
  users: Array<UserType>
  followingInProgress: Array<number> 
  follow: () => void 
  unfollow: () => void
}

const Users: React.FC<UsersType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow}) => {
    return <div>
          <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
        {users.map((user, index) => <User key={index} user = {user} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}  />)
}
</div>  
}

export default Users;