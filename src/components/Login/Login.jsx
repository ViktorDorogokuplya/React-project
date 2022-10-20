import React from "react";
import { connect } from "react-redux";
import {Field, reduxForm } from 'redux-form'
import { required } from "../../utils/validators/validators";
import {Input, createFeield} from "../FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "../FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error}) => {

    return <form onSubmit={handleSubmit}>
              { createFeield("Email", "email", Input, [required])}
              {createFeield("password", "password", Input, [required], {type: "password"})}
              {createFeield(null, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}
                {/* <div>
                    <Field name="email" placeholder={"email"} component={Input} validate={[required]}/>
                </div>
                <div>
                <Field name="password" placeholder={"password"} component={Input} validate={[required]} type={"password"}/>
                </div>
                <div>
                    <Field name="rememberMe" type={"checkbox"} component={Input}/> remember me
                </div> */}

                {error && <div className={style.formSummaryError}>{error}</div>}
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