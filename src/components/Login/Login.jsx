import React from "react";
import { connect } from "react-redux";
import {Field, reduxForm } from 'redux-form';
import { required } from "../../utils/validators/validators";
import {Input} from "../FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "../FormsControls/FormsControls.module.css"


const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="email" placeholder={"email"} component={Input} validate={[required]}/>
                </div>
                <div>
                <Field name="password" placeholder={"password"} component={Input} validate={[required]} type={"password"}/>
                </div>
                <div>
                    <Field name="rememberMe" type={"checkbox"} component={Input}/> remember me
                </div>
                {props.error && <div className={style.formSummaryError}>{props.error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const LoginPage = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={'/profile/'}></Navigate>
    }

    return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>          
           </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(LoginPage);