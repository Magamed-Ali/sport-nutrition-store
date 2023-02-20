import React from 'react';
import s from "./SportPit.module.css"
import {NavLink} from "react-router-dom";

const SportPit = () => {
    return (
        <div className={s.container}>
            <div className={s.item}>
                <img src="https://ir.ozone.ru/s3/multimedia-t/c1000/6034364333.jpg" alt=""/>
                <br/>
                <NavLink to={"/protein"}>Протеины</NavLink></div>
            <div className={s.item}>
                <img src="https://ir.ozone.ru/s3/multimedia-h/c1000/6260356337.jpg" alt=""/>
                <br/>
                <NavLink to={"/carbs"}>Гейнеры</NavLink></div>
            <div className={s.item}>
                <img
                    src="https://misterprot.ru/image/cache/data/brend/aminki/befirst_creatine_monohydrate_120caps-800x1000.jpg"
                    alt=""/>
                <br/>
                <NavLink to={"/creatine"}>Креатин</NavLink></div>
            <div className={s.item}>
                <img src="https://pittop.ru/12283-large_default/opti-men-90-tabl-optimum-nutrition.jpg" alt=""/>
                <br/>
                <NavLink to={"/vitamin"}>Витамины</NavLink></div>
            <div className={s.item}>
                <img src="https://ae04.alicdn.com/kf/U3cc8b9a38c504a0ea9ad857623154215t/Candy-Coach.jpg" alt=""/>
                <br/>
                <NavLink to={"/accessories"}>Аксессуары</NavLink></div>
        </div>
    );
};

export default SportPit;