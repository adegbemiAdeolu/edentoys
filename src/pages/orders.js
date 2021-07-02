import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import NewNavbar from '../components/NewNavbar'
import NewSidebar from '../components/NewSidebar'
import Orders from '../components/Orders/Orders'

function orders() {
    

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <NewSidebar isOpen={isOpen} toggle={toggle} />
            <NewNavbar toggle={toggle} />
            <Orders />
            
        
        </>
    )
}

export default orders
