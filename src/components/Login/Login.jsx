import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControl";
import { requiredField } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { captcha, login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "./../common/FormsControls/FormControl.module.css"

const Login = ({isAuth,login}) => {
    debugger;
    const onSubmit = (formData) => {
    login(formData.login, formData.password, formData.rememberMe)
    }
    // if(props.isCaptcha) {
    //     alert('afawf');
    // }
    if (isAuth) {
        return <Navigate to="/profile"/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><Field validate={[requiredField]} placeholder={"Login"} name={"login"} component={Input}/></div>
        <div><Field validate={[requiredField]} placeholder={"Password"} name={"password"} component={Input}/></div>
        <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/>Remember me</div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div><button>login</button></div>
    </form>
}

const LoginReduxForm = reduxForm({
    form:'login',
})(LoginForm);
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isCaptcha: state.auth.isCaptcha,
})
export default connect(mapStateToProps, {login, captcha}) (Login);