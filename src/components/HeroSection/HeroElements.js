import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 100px 200px;
    height: 550px;
    position: relative;
    z-index: 1;


    @media screen and (max-width: 480px) {
        width: 100%;
        margin: 0;
        padding: 4rem 0;
        
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;


    @media screen and (max-width: 541px) {
        /* background-color: #6CD2C4; */
    }
`

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

    @media screen and (max-width: 820px) {
        mask-image: linear-gradient(to center, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }

    @media screen and (max-width: 541px) {
        /* visibility: hidden; */
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    width: 75%;
    margin: auto;
    max-width: 1200px;
    position: absolute;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    align-items: left;
    font-family: 'Poppins';

    @media screen and (max-width: 820px) {
        width: 95%;
        display: block;
        align-items: center;
        text-align: left;
       
        right: 0;
        left: 0;
        padding: 2rem;
    }

    
`

export const HeroH1 = styled.h1`
    font-size: 2.5rem;
    line-height: 3.625rem;
    font-weight: 700;
    text-align: left;
    color: #000;
    font-family: 'Poppins';
    /* -webkit-mask-image: src=(../../images/home.jpg);
    mask-image: url(../../images/home.jpg); */
    

    @media screen and (max-width: 768px) {
        text-align: left;
        width: 100%;
    }
`

export const HeroSpan = styled.span`
    color: #000000;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 2.5rem;
    background-color: #F140B9;
    padding: 0 0.5rem;
`

export const HeroP = styled.p`
    font-family: 'Poppins';
    margin-top: 0.5rem; 
    color: #000;
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 700;
    text-align: left;
    max-width: 600px;

   
`

export const HeroPSpan = styled.span`
    background-color: #00AB5F;
    font-weight: 700;
    padding: 0 0.2rem;
    font-family: 'Poppins';
`

export const HeroBtnWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    font-weight: 700;
    font-size: 1.25rem;
`