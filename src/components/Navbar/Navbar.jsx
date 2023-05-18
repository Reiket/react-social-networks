import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';
import s from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className= {s.nav}>
            <ul className= {s.list}>
                <li className={s.item}>
                    <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
                </li>
            </ul>
            <FriendsContainer /> 
        </nav>
        
    );
}

export default Navbar;