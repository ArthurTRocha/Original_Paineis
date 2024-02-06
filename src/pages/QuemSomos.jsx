import React from "react";
import "../styles/quemsomos.css"
import Header from "../components/header/Header";

import Footer from "../components/footer/Footer";

function QuemSomos () {
    return (
        <div className="quemSomos">
            <div className="headerHome">
                <Header/>
            </div>
            <div className="headerMobile">

            </div>

            <div className="footerP">
            <Footer/>
            </div>
            
        </div>
    )
}
export default QuemSomos;