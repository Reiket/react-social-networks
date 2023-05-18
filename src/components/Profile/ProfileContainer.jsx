import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import './Profile.css'
import { getUserProfile, getStatus, updateUserStatus } from '../../redux/profile-reducer';
import { useLocation, useParams } from 'react-router-dom';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../redux/withrouter';
const ProfileAPIComponent = (props) => {
    debugger;
    const params = useParams();
    const location = useLocation();
    if (!params.userId) {
        params.userId = props.authUserId;
    }
    useEffect(() => {
        props.getUserProfile(params.userId);
        props.getStatus(params.userId)
    }, [])
    return (
        <Profile profile={props.profile} status={props.status}  updateUserStatus= {props.updateUserStatus}/>
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
    connect(mapStateToProps, { getUserProfile, getStatus, updateUserStatus }),
    WithAuthRedirect,
)(ProfileAPIComponent); 


