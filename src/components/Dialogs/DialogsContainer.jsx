import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
export default compose(
    connect(mapStateToProps, {sendMessage}),
    WithAuthRedirect,
)(Dialogs);; 