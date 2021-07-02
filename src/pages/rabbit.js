import React, { useState} from 'react';
import NewNavbar from '../components/NewNavbar/index';
import ProductSection from '../components/RabbitBox/index';
import NewSidebar from '../components/NewSidebar/index';
import Footer from '../components/Footer/index';

const rabbit = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <NewSidebar isOpen={isOpen} toggle={toggle} />
        <NewNavbar toggle={toggle} />
        <ProductSection /> 
        <Footer />
        </>
    )
}

export default rabbit