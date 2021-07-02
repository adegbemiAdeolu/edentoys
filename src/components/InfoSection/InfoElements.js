import styled from 'styled-components';
import { MdArrowForward } from 'react-icons/md';

export const InfoContainer = styled.div`
    background: #fff;
    align-items: center;
    text-align: center;
    align-content: center;
    height: auto;

    @media screen and (max-width: 820px) {
        padding: 1rem 0;
        margin: auto;
    }
`


export const Wrapper = styled.div`
    width: 75%;
    display: block;
    margin: 0 auto;
    padding: 3rem 0;

    @media screen and (max-width: 820px) {
        width: 95%;
        padding: 0;
        margin: auto;
    }
`

export const InfoTitle = styled.h1`
    width: 100%;
    text-align: left;
    font-family: 'Poppins';
    font-size: 2.2rem;
    font-weight: 700;
    margin: 2rem 0 0 0;

`

export const InfoSubTitle = styled.h2`
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 0;
    font-family: 'Poppins';
    text-align: left;
    width: 100%;
    margin-bottom: 1rem;
`

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
    align-items: center;
    text-align: center;
    width: 85%;
    margin: 3rem auto;

    @media screen and (max-width: 1025px) {
        width: 100%;
        
    }

    @media screen and (max-width: 541px) {
        padding: 0;
    }

    @media screen and (max-width: 481px) {
        grid-template-columns: 1fr;
        width: 100%;
    }
`

export const ContentWrapper = styled.div`
    display: block;
    border-radius: 10px;
    background: #fff;
    margin: 0 0 2rem 0;
    padding-bottom: 1rem;
    width: 85%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 90px;
    

    @media screen and (max-width: 769px) {
        width: 100%;
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 541px) {
        width: 100%;
        padding: 0 0 1rem 0;
    }

    @media screen and (max-width: 481px) {
        
    }
`

export const Column = styled.div`
    width: 100%;
    

    &:hover {
        transform: scale(1.02);
        transition: transform .1s ease-out;
    }

    @media screen and (max-width: 769px) {
        width: 90%;
        display: block;
        margin: auto;
        height: auto;
    }

    @media screen and (max-width: 481px) {
        width: 80%;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
    }
`

export const HeadingWrapper1 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #E7F8F6;
    padding: 0 1rem;    
`

export const HeadingWrapper2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FDEEE9;
    padding: 0 1rem;    
`

export const HeadingWrapper3 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FEFAE8;
    padding: 0 1rem;    
`

export const HeadingImage = styled.div`
    width: 4rem;
    height: 4rem;
    overflow: hidden;
    margin-right: 1rem;

    @media screen and (max-width: 820px) {
        width: 3rem;
        height: 3rem;
    }

    @media screen and (max-width: 541px) {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
    }

    @media screen and (max-width: 481px) {
        width: 3rem;
        height: 3rem;
        margin: 1rem 0;
    }
    
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
`

export const Heading = styled.h2`
    display: block;
    margin: 1rem 0 1rem 0;
    font-size: 1.3rem;
    font-weight: 700;
    color: #000;
    font-family: 'Poppins';
    text-align: left;

    @media screen and (max-width: 820px) {
        font-size: 1.0rem;
    }

    @media screen and (max-width: 541px) {
        font-size: 0.8rem;
        margin: 0.3rem 0 0.3rem 0;
        line-height: 1.2rem;
    }

    @media screen and (max-width: 481px) {
        font-size: 1.3rem;
        line-height: 1.7rem;
        margin: 0 0 0 -1rem;

    }
`
export const IconWrapper = styled.div`
    
        
`
export const ArrowIcon = styled(MdArrowForward)`
    font-size: 1.6rem;
    color: #000;

    @media screen and (max-width: 541px) {
        font-size: 1.2rem;
    }
`
export const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
`
export const Image = styled.img`
    width: 100%;
    height: 13.75rem;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (max-width: 820px) {
        height: 10rem;
    }

    @media screen and (max-width: 541px) {
        height: 8rem;
    }

    @media screen and (max-width: 481px) {
        height: 12rem;
    }
`

export const Text = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    color: #000;
    font-weight: 700;
    text-align: left;
    margin: 1rem 2rem 0 2rem;

    
`