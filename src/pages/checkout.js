import React, { useState } from 'react'
import Footer from '../components/Footer'
import Checkout from '../components/MyCheckout/Checkout'
import NewNavbar from '../components/NewNavbar'
import NewSidebar from '../components/NewSidebar'

function checkout() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <NewSidebar isOpen={isOpen} toggle={toggle} />
            <NewNavbar toggle={toggle} />
            <Checkout />
            <Footer />
        </>
    )
}

export default checkout
