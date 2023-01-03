import React from "react";
import { useEffect } from "react"
import Nav1 from "./Nav1";
import Home from "./Home";
import Works from "./Works";
import Products from "./Products";
import Team from "./Team";
import Footer from "./Footer"
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./Nav1.css"
import "./Nav.css"
import "./Home.css"
import "./Works.css"
import "./Products.css"
import "./Team.css"
import "./Footer.css"
const Servetab = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    return (<>
        <Nav1 />
        <Home />
        <Products />
        <Works />
        <Team />
        <Footer />
    </>)
}
export default Servetab