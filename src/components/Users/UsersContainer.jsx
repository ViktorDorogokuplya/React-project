import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, togleIsFetching, togleFollowingInProgress } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/praloader/Preloader";
import { getUsers } from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.togleIsFetching(true);
        
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {  
        this.props.togleIsFetching(false);       
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.togleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        getUsers(pageNumber, this.props.pageSize).then(response => {     
        this.props.togleIsFetching(false);
        this.props.setUsers(response.data.items);
        });
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

export default connect(mapStateToProps, {follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togleIsFetching,
    togleFollowingInProgress, })(UsersContainer);

 