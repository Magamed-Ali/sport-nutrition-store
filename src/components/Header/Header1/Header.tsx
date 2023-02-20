import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import o from "../Opt/Opt.module.css";

const Header = () => {

    return (
        <nav className={s.container}>
            <div className={s.item}> <NavLink to={"/delivery"}> Доставка </NavLink></div>
            <div className={s.item}> <NavLink to={"/opt"}>Оптовые предложения</NavLink></div>
            <div className={s.item}> <NavLink to={"/services"}>Услуги</NavLink></div>
            <div className={s.item}> <NavLink to={"contacts"}>Контакты </NavLink></div>
        </nav>

    );
};

export default Header;