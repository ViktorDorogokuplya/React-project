import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import {useParams} from 'react-router-dom';
// import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
// import {usersAPI} from "../../api/api"




class ProfileContainer extends React.Component {

    componentDidMount() {
       
        let userId = this.props.param.userId;

        if(!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);


        // usersAPI.getProfile(userId).then(data => {   
        // this.props.setUserProfile(data)});
}

    render() {

        // if (!this.props.isAuth) return <Navigate to={'/login'} />;
      
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
             </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
    
});
function TakeParams(props){
    return <ProfileContainer {...props} param={useParams()} />
}


export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}), withAuthRedirect)(TakeParams);

// connect(mapStateToProps, {getUserProfile})(TakeParams);