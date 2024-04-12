import React, { useEffect, useRef } from "react";
import "../styles/home.css"
import Header from "../components/header/Header";
import HeaderM from "../components/header/headerM/HeaderM";
import HomeUm from "../components/homeum/HomeUm";
import HomeDois from "../components/homedois/HomeDois";
import HomeTres from "../components/hometres/HomeTres";
import HomeQuatro from "../components/homequatro/HomeQuatro";
import HomeCinco from "../components/homecinco/HomeCinco"
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";

function Home () {

    const suaDivRef = useRef(null);
    const location = useLocation();
  
    useEffect(() => {
      const scrollToDiv = new URLSearchParams(location.search).get('scrollToDiv') === 'true';
  
      if (scrollToDiv && suaDivRef.current) {
        suaDivRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, [location.search]);



    // -----------------------------------------------


    const outraDivRef = useRef(null); // Ref para a outra div
    
    useEffect(() => {
      const scrollToDiv = new URLSearchParams(location.search).get('scrollToDivs') === 'true';
      
      if (scrollToDiv && outraDivRef.current) {
        outraDivRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, [location.search]); 

    return (
        <div className="home">
            <div className="headerHome">
                <Header/>
            </div>
            <div className="headerMobile">
                <HeaderM/>
            </div>
            <HomeUm/>
            <HomeDois/>
            <HomeTres/>
            <div ref={suaDivRef}><HomeQuatro/></div>
            <div ref={outraDivRef}><HomeCinco/></div>
            <div className="footerP">
            <Footer/>
            </div>
        </div>
    )
}
export default Home;