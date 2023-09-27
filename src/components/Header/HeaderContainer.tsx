import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {selectIsAuth, selectLogin} from "../../redux/auth-selector";
import {AppStateType} from "~/src/redux/redux-store";
type OwnPropsType = {

}
type MapStatePropsType = {
    isAuth: boolean;
    login: string | null

}
type MapDispatchPropsType = {
    logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;
class HeaderContainer extends React.Component<PropsType> {
    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: selectIsAuth(state),
    login: selectLogin(state),
})
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {logout}) (HeaderContainer);