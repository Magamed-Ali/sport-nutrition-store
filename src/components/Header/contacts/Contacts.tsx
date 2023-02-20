import React from 'react';
import urus from "./adressMap.jpg"
import c from "./Contacts.module.css"
const Contacts = () => {
    return (
        <div className={c.container}>
            <div>
           <div className={c.item}><p>Владелец магазина - Замбек.<br/> Магазин находится по адресу - г.Урус-Мартна, ул.ХХХ, дом Х </p></div>
           <div className={c.item}><img src={urus} alt="csc"/> </div>
            </div>
            <div>
            <div className={c.item}>Команда разработчиков сайта :
           <p> Хехаев Мохмад-Селим 89380009485 <br/>
                Газмагамаев Магомед-Али 89640645942</p></div>
            <div className={c.item}><img src="https://bugza.info/wp-content/uploads/b_56a609e63745c.jpg" alt="csc"/> </div>
            </div>
           </div>
    );
};

export default Contacts;