import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import './Profile.css'
import {getUserProfile, getStatus, updateUserStatus, savePhoto, saveProfile} from '../../redux/profile-reducer.ts';
import { useParams } from 'react-router-dom';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../redux/withrouter';
import {selectProfile, selectStatus} from "../../redux/profile-selectors";
import {selectIsAuth, selectUserId} from "../../redux/auth-selector";
const ProfileAPIComponent = (props) => {
    const params = useParams();
    if (!params.userId) {
        params.userId = props.authUserId;
    }
    const refreshProfile = () => {
        props.getUserProfile(params.userId);
        props.getStatus(params.userId)
    }
    useEffect(() => {
        refreshProfile();
    }, [])
    useEffect( () => {
        refreshProfile();
    }, [params.userId])
    return (
        <Profile profile={props.profile} saveProfile={props.saveProfile} status={props.status} isOwner = {props.authUserId === params.userId} updateUserStatus= {props.updateUserStatus} savePhoto = {props.savePhoto}/>
    );
}
let mapStateToProps = (state) => ({
    profile: selectProfile(state),
    status: selectStatus(state),
    authUserId: selectUserId(state),
    isAuth: selectIsAuth(state),
})
export default compose(
    withRouter,
    connect(mapStateToProps, { getUserProfile, savePhoto, getStatus, updateUserStatus, saveProfile }),
    WithAuthRedirect,
)(ProfileAPIComponent); 







