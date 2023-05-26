import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import './Profile.css'
import {getUserProfile, getStatus, updateUserStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import { useLocation, useParams } from 'react-router-dom';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../redux/withrouter';
const ProfileAPIComponent = (props) => {
    const params = useParams();
    const location = useLocation();
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
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})
export default compose(
    withRouter,
    connect(mapStateToProps, { getUserProfile, savePhoto, getStatus, updateUserStatus, saveProfile }),
    WithAuthRedirect,
)(ProfileAPIComponent); 


