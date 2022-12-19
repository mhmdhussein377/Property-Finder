import React from "react";
import Header from "../Header";
import {Routes, Route} from "react-router-dom";
import Footer from "../Footer";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Blog from "./Blog";
import Pricing from "./Pricing";
import Contact from "./Contact";

const Pages = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/pricing" element={<Pricing />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default Pages;
