import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, getUsers } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/praloader/Preloader";
// import { usersAPI } from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        // this.props.togleIsFetching(true);
        
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {  
        // this.props.togleIsFetching(false);       
        // this.props.setUsers(data.items);
        // this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.togleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);

        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {     
        // this.props.togleIsFetching(false);
        // this.props.setUsers(response.data.items);
        // });
    }

    render() {

        return <>
        {this.props.isFetching ? <Preloader /> : null} 
        <Users totalUsersCount={this.props.totalUsersCount} 
                pageSize={this.props.pageSize} 
                currentPage={this.props.currentPage} 
                onPageChanged={this.onPageChanged} 
                users={this.props.users} 
                follow={this.props.follow} 
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                togleFollowingInProgress={this.props.togleFollowingInProgress} />
        </>
    }
    
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, 
    {follow,
    unfollow,
    setCurrentPage,      
    getUsers})(UsersContainer);

 