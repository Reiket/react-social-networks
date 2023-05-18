import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src={props.avatar} alt="" />
            <NavLink className={s.link} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem;