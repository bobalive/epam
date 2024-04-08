import { NavLink } from "react-router-dom";
import s from './Header.module.scss';

export const Header = () => {
    return (
        <header className={s.header}>
            <h1>Async Race</h1>
            <div className={s.navBox}>
                <NavLink to='/' className={({isActive}) =>
                    `${s.navlink} ${isActive ? s.active : ''}`
                }>
                    Garage
                </NavLink>
                <NavLink to='/winners' className={({isActive}) =>
                    `${s.navlink} ${isActive ? s.active : ''}`
                }>
                    Winners
                </NavLink>
            </div>
        </header>
    );
};
