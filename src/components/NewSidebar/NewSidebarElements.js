import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import {IoClose} from 'react-icons/io5';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #65ECFE;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(IoClose)`
    color: #FFFFFF;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
     color: #FFFFFF;

`

export const SidebarWrapper = styled.div`
    color: #FFFFFF;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
font-family: 'Poppins';

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const CartWrapper = styled.div`
    display: inline-block;
    width: 100%;
    color: #fff;
    font-size: 3rem;
    margin: auto;
    text-align: center;
    
`

export const CartCount = styled.div`
    font-family: 'Poppins';
    font-weight: 700;
    margin-left: 0.4rem;
    font-size: 1.3rem;
    
`


