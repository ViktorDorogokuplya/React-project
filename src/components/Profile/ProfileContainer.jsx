import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import {useParams} from 'react-router-dom';
// import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
// import {usersAPI} from "../../api/api"



class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.param.userId;
    
            if(!userId) {
                userId = this.props.authorizedUserId;
            }
    
            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId);
    }

    componentDidMount() {
       
        this.refreshProfile()
}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.param.userId !== prevProps.param.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <div>
                <Profile {...this.props} isOwner={!this.props.param.userId} 
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateUserStatus} 
                savePhoto={this.props.savePhoto} 
                // saveProfile={this.props.saveProfile} 
                />
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

export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}), withAuthRedirect)(TakeParams);
