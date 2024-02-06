import React from "react";
import "../styles/home.css"
import Header from "../components/header/Header";
import HomeUm from "../components/homeum/HomeUm";
import HomeDois from "../components/homedois/HomeDois";
import HomeTres from "../components/hometres/HomeTres";
import HomeQuatro from "../components/homequatro/HomeQuatro";
import HomeCinco from "../components/homecinco/HomeCinco"
import Footer from "../components/footer/Footer";

function Home () {
    return (
        <div className="home">
            <div className="headerHome">
                <Header/>
            </div>
            <div className="headerMobile">

            </div>
            <HomeUm/>
            <HomeDois/>
            <HomeTres/>
            <HomeQuatro/>
            <HomeCinco/>
            
            <div className="footerP">
            <Footer/>
            </div>
        </div>
    )
}
export default Home;