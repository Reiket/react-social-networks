import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControl";
import { requiredField } from "../../utils/validators/validator";
import { connect } from "react-redux";
import {getCaptchaUrlSuccess, login} from "../../redux/auth-reducer.ts";
import { Navigate } from "react-router-dom";
import style from "./../common/FormsControls/FormControl.module.css"

const Login = ({isAuth,login, captchaUrl}) => {
    const onSubmit = (formData) => {
    login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return <Navigate to="/profile"/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl = {captchaUrl}/>
    </div>
}
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        <div><Field validate={[requiredField]} placeholder={"Login"} name={"login"} component={Input}/></div>
        <div><Field validate={[requiredField]} placeholder={"Password"} name={"password"} component={Input}/></div>
        <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/>Remember me</div>
        {captchaUrl && <img src={captchaUrl} alt=""/>}
        {captchaUrl && <Field validate={[requiredField]} placeholder={"Symbols from image"} name={"captcha"} component={Input}/>}
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
    captchaUrl: state.auth.captchaUrl,
})
export default connect(mapStateToProps, {login, getCaptchaUrlSuccess}) (Login);