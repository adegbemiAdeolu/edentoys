import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import HowToSection from '../components/HowToSection';
import AboutUs from '../components/AboutSection';
import Offers from '../components/Offers';
import SignUpSection from '../components/SignUp';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <HowToSection />
            <InfoSection />
            <AboutUs />
            <Offers />
            <SignUpSection />
            <Footer />
            
        </>
    )
}

export default Home
