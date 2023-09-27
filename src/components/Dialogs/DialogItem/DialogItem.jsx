import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = ({avatar, name, id}) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src={avatar} alt="Avatar" />
            <NavLink className={s.link} to={"/dialogs/" + id}>{name}</NavLink>
        </div>
    );
}


export default DialogItem;