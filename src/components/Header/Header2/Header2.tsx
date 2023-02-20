import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header2.module.css"
const Header2 = () => {
    return (
       <nav className={s.container}>
           <div className={s.item}> <NavLink to={"/sport-pit"}>Спортивное питание</NavLink></div>
           <div className={s.item}> <NavLink to={"/stock"}>Акции</NavLink></div>
           <div className={s.item}> <NavLink to={"/sarms"}>Сармы и бустеры тестостерона</NavLink></div>
       </nav>
    );
};

export default Header2;