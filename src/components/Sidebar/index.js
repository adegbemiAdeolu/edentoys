import React from 'react';
import { IoCartOutline, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink, CartWrapper, CartCount, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }


    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <IoClose />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="how-it-works" onClick={toggle}>
                        How it works
                    </SidebarLink>
                    <SidebarLink to="products" onClick={toggle}>
                        Products
                    </SidebarLink> 
                    <SidebarLink to="benefits" onClick={toggle}>
                        Benefits
                    </SidebarLink>
                    <SidebarRoute to={!user && '/sign-up'} onClick={handleAuthentication}>
                        {user ? 'Sign Out' : 'Sign In'}
                    </SidebarRoute>
                </SidebarMenu>

                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <CartWrapper>
                        <IoCartOutline />
                        <CartCount>
                            {basket.length}
                        </CartCount>
                    </CartWrapper>
                </Link>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
