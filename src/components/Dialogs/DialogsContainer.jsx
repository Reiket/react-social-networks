import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';
import {selectDialogsPage} from "../../redux/dialogs-selectors";
import {sendMessage} from "../../redux/dialogs-reducer.ts";


const mapStateToProps = (state) => {
    return {
        dialogsPage: selectDialogsPage(state),
    }
}
export default compose(
    connect(mapStateToProps, {sendMessage}),
    WithAuthRedirect,
)(Dialogs);