import { NavLink } from 'react-router-dom';
// @ts-ignore
import s from './Header.module.css';
import React from "react";

type PropsType = {
    isAuth: boolean;
    login: string | null;
    logout: () => void;
    children?: React.ReactNode;
}

const Header: React.FC<PropsType> = ({ isAuth, login, logout, children }) => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg' alt="Logo" />
            <div className={s.loginBlock}>
                {isAuth ? <div>{login} - <button onClick={logout}>Log Out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
                {children}
            </div>
        </header>
    );
}

export default Header;