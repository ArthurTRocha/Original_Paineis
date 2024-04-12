import React from "react";
import "../styles/quemsomos.css"
import Header from "../components/header/Header";
import HeaderM from "../components/header/headerM/HeaderM"
import QuemSomos1 from "../components/quemsomos1/QuemSomos1"
import QuemSomos2 from "../components/quemsomos2/QuemSomos2"
import Footer from "../components/footer/Footer";

function QuemSomos () {
    return (
        <div className="quemSomos">
            <div className="headerHome">
                <Header/>
            </div>
            <div className="headerMobile">
                <HeaderM/>
            </div>
            <QuemSomos1/>
            <QuemSomos2/>
            <div className="footerP">
            <Footer/>
            </div>
            
        </div>
    )
}
export default QuemSomos;