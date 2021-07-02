import React, { useState} from 'react';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer';
import NewNavbar from '../components/NewNavbar';
import NewSidebar from '../components/NewSidebar';


const cart = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <NewSidebar isOpen={isOpen} toggle={toggle} />
            <NewNavbar toggle={toggle} />
            <Cart />
            <Footer />
        </>
    )
}

export default cart
