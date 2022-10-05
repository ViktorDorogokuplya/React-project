import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import {useParams} from 'react-router-dom';
import {Navigate} from "react-router-dom";
// import {usersAPI} from "../../api/api"




class ProfileContainer extends React.Component {

    componentDidMount() {
       
        let userId = this.props.param.userId;

        if(!userId) {
            userId = 26022;
        }

        this.props.getUserProfile(userId)

        // usersAPI.getProfile(userId).then(data => {   
        // this.props.setUserProfile(data)});
}

    render() {

        if (this.props.isAuth) return <Navigate to={'/login'} />;
      
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
             </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
    
});

const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps, {getUserProfile})(TakeParams);