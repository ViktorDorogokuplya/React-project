import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {getUserData} from "../../redux/auth-reducer";
// import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData();
        // authAPI.me().then(data => {  
        //     if (data.resultCode === 0) {
        //         let {id, login, email} = data.data;
        //         this.props.setAuthUserData(id, email, login);
        //     }
        // });
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {getUserData})(HeaderContainer);