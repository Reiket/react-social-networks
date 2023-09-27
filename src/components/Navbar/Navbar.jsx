import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';
import s from './Navbar.module.css';
import navLinks from './nawLinks.json';
const Navbar = () => {
    return (
        <nav className= {s.nav}>
            <ul className= {s.list}>
                {navLinks.map((link, index) => <li key={index} className={s.item}><NavLink to={link.url} className = { navData => navData.isActive ? s.active : s.item }>{link.name}</NavLink></li>)}
            </ul>
            <FriendsContainer /> 
        </nav>
        
    );
}

export default Navbar;