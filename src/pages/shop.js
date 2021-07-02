import React, { useState } from 'react'
import NewNavbar from '../components/NewNavbar'
import NewSidebar from '../components/NewSidebar'
import Shop from '../components/Shop'

function shop() {
     // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <NewSidebar isOpen={isOpen} toggle={toggle} />
            <NewNavbar toggle={toggle} />
            <Shop />
            
        </>
    )
}

export default shop
