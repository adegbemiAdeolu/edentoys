import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.div`
    background: #FFFFFF;
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    
`

export const NavLogo = styled(LinkR)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Poppins';
`

export const MobileIcon = styled.div`
    display: none;
    height: 100%;
    align-items: center;
    -webkit-box-align: center;

    @media screen and (max-width: 768px) {
        height: 100%;
        align-items: center;
        -webkit-box-align: center;
        display: flex;
        position: absolute;
        top: 0;
        right: 6%;
        font-size: 2rem;
        cursor: pointer;
        color: #000;
    
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkR)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 700;
    font-family: 'Poppins';

    &.active {
        border-bottom: 5px solid #000;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    font-family: 'Poppins';

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #007F2E;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFFFFF;
        color: #010606;
    }
`

export const CartWrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    -webkit-box-align: center;
    color: #000;
    font-size: 2rem;

    @media screen and (max-width: 541px) {
        position: absolute;
        top: 0;
        right: 43%;
    }
`

export const CartCount = styled.div`
    font-family: 'Poppins';
    font-weight: 700;
    margin-left: 0.4rem;
    font-size: 1rem;
`