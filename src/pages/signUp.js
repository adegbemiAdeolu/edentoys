import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormTwo from '../components/MyForm/FormTwo';
import { SignUpContainer, SignUpWrapper, Heading } from '../components/SignUp/SignUpPageElements';

function signUp() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <SignUpContainer>
            <Heading>
                Create a free account or sign in to your account.
            </Heading>
            <SignUpWrapper>
                <FormTwo />
            </SignUpWrapper>
        </SignUpContainer>
        <Footer />
        </>
        
    )
}

export default signUp
