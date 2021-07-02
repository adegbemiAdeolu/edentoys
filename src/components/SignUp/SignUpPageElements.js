import styled from 'styled-components';

export const SignUpContainer = styled.div`
    background: #fff;
    align-items: center;
    text-align: center;
    align-content: center;
    height: auto;
    padding-bottom: 3rem;
    position: relative;
    z-index: 0;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    } 

    @media screen and (max-width: 541px) {
        padding: 1rem 0;
    }

    @media screen and (max-width: 481px) {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`

export const SignUpWrapper = styled.div`
    width: 30%;
    margin: auto;
    height: 70vh;

    @media screen and (max-width: 1025px) {
        width: 40%;
        height: 850px;
        max-height: 1366px;
    }

    @media screen and (max-width: 1025px) {
        width: 50%;
        height: 850px;
        max-height: 1366px;
    }

    @media screen and (max-width: 769px) {
        height: 570px;
        max-height: 1024px;
    }

    @media screen and (max-width: 541px) {
        width: 70%;
        height: 400px;
        max-height: 730px;
    }
`

export const Heading = styled.h1`
    font-size: 2.2rem;
    font-family: 'Poppins';
    width: 50%;
    margin: auto;
    padding-top: 3rem;

    @media screen and (max-width: 769px) {
        width: 70%;
    }

    @media screen and (max-width: 769px) {
        width: 90%;
        padding-top: 2rem;
    }
`