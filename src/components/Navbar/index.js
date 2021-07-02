import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, CartWrapper, CartCount } from './NavbarElements';
import { IoMenuOutline, IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const Navbar = ({ toggle }) => {

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }


    const [{ basket, user }] = useStateValue();

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
                            <NavLinks to='how-it-works' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                How it works
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='products' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                Products
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='benefits' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                Benefits
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

export default Navbar
