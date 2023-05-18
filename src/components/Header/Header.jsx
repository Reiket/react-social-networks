import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = (props) => {
    return (
    <header className= {s.header}>
        <img src='https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg'/>
        <div className={s.loginBlock}>
          {/* <img src={props.profile.photos.small} alt="" /> */}
          {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
    );
}

export default Header;