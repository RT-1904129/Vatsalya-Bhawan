import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Rooms from "./Rooms";
import Dining from "./Dining";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

const VatsalyaBhawan = () => {
    return (
        <div>
            <Header/>
            <main>
                <Hero />
                <Rooms />
                <Dining />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default VatsalyaBhawan;