import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, CartWrapper, CartCount } from './NewNavbarElements';
import { IoCartOutline, IoMenuOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const NewNavbar = ({ toggle }) => {

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    const [{ basket, user }, dispatch] = useStateValue();
    
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Ed;N
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                         <IoMenuOutline />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">
                                Home
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="bunny-box">
                                Bunny Box
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/rabbit-box">
                                Rabbit Box
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/eagle-box">
                                Eagle Box
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks >
                                <Link to={!user && '/sign-up'} onClick={handleAuthentication} style={{ textDecoration: 'none', color: '#007F2E'}}>
                                    {user ? 'Sign Out' : 'Sign In'}
                                </Link>
                            </NavLinks>
                        </NavItem>
                    </NavMenu>

                    <Link to="/cart" style={{ textDecoration: 'none' }}>
                        <CartWrapper>
                            <IoCartOutline />
                            <CartCount>
                                {basket.length}
                            </CartCount>
                        </CartWrapper>
                    </Link>
                </NavbarContainer>
            </Nav>
            
        </>
    )
}

export default NewNavbar
