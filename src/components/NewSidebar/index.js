import React from 'react';
import { IoCartOutline, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink, CartWrapper, CartCount } from './NewSidebarElements';

const NewSidebar = ({ isOpen, toggle }) => {

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
                    <SidebarLink to="/" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/bunny-box" onClick={toggle}>
                        Bunny Box
                    </SidebarLink>
                    <SidebarLink to="/rabbit-box" onClick={toggle}>
                        Rabbit Box
                    </SidebarLink>
                    <SidebarLink to="/eagle-box" onClick={toggle}>
                        Eagle Box
                    </SidebarLink>

                    <SidebarLink to={!user && '/sign-up'} onClick={handleAuthentication} >
                        {user ? 'Sign Out' : 'Sign In'}
                    </SidebarLink>
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

export default NewSidebar
