import React from 'react';
import Header from "./components/Header/Header1/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Delivery from "./components/Header/Delivery/Delivery";
import Opt from "./components/Header/Opt/Opt";
import Services from "./components/Header/services/Services";
import Contacts from "./components/Header/contacts/Contacts";
import Header2 from "./components/Header/Header2/Header2";
import WhatsApp from "./components/whatsApp/WhatsApp";
import SportPit from "./components/Header2/sportPit/SportPit";
import Stocks from "./components/Header2/stocks/Stocks";
import Sarms from "./components/Header2/sarms/Sarms";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                   <Header2/>
                <Routes>
                <Route path={"/delivery"} element={<Delivery />}/>
                <Route path={"/opt"} element={<Opt />}/>
                <Route path={"/services"} element={<Services />}/>
                <Route path={"/contacts"} element={<Contacts />}/>
                <Route path={"/sport-pit"} element={<SportPit />}/>
                <Route path={"/stocks"} element={<Stocks />}/>
                <Route path={"/sarms"} element={<Sarms />}/>

                </Routes>
                <WhatsApp/>
            </div>
        </BrowserRouter>
    );
}

export default App;
