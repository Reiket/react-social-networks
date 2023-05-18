import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Provider, connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from './redux/withrouter';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/preloader';
import store from './redux/redux-store';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Music = React.lazy(() => import('./components/Music/Music'));
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    debugger;
  if(!this.props.initialized) {
    return <Preloader/>
  }
    return (
      <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar />
          <div className="app-wrapper-content">
          <React.Suspense fallback={<div><Preloader/></div>}>
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </React.Suspense>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);
const MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <AppContainer />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
}

export default MainApp;
