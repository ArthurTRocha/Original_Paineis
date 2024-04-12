import React from "react";
import "../styles/trabalheconosco.css"
import Header from "../components/header/Header";
import HeaderM from "../components/header/headerM/HeaderM"
import Footer from "../components/footer/Footer"
import TrabalheConosco1 from "../components/trabalheconosco/TrabalheConosco1"
import TrabalheConosco2 from "../components/trabalheconosco/TrabalheConosco2";

function TrabalheConosco () {
    return (
        <div className="TrabalheConosco">
            <div className="headerHome">
                <Header/>
            </div>
            <div className="headerMobile">
                <HeaderM/>
            </div>
            <TrabalheConosco1/>
            <TrabalheConosco2/>
            <div className="footerP">
            <Footer/>
            </div>
        </div>
    )
}

export default TrabalheConosco;