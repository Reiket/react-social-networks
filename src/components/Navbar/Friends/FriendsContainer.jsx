import { connect } from "react-redux";
import Friends from "./Friends";
import {selectFriends} from "../../../redux/sidebar-selectors";
let mapStateToProps = (state) => {
    return {
        friends: selectFriends(state),
    }
}

const FriendsContainer = connect (mapStateToProps) (Friends);

export default FriendsContainer;