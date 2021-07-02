import styled from 'styled-components';
import { MdArrowForward } from 'react-icons/md';

export const HowToContainer = styled.div`
    background: #65ECFE;
    align-items: center;
    text-align: center;
    align-content: center;
    height: auto;

    @media screen and (max-width: 768px) {
        padding: 2rem 0;
    } 

    @media screen and (max-width: 541px) {
        padding : 2rem 0 0 0;
    }
`

export const HowToWrapper = styled.div`
    width: 75%;
    display: block;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: auto;
    padding-top: 5rem;

    @media screen and (max-width: 1025px) {
        padding: 5rem 0 2rem 0;
    }

    @media screen and (max-width: 820px) {
        width: 95%;
        padding: 3rem 0;
    }

    @media screen and (max-width: 541px) {
        width: 95%;
        padding: 0;
    }
`

export const HowToTitle = styled.h1`
    width: 100%;
    display: block;
    text-align: left;
    font-weight: 700;
    line-height: 3rem;
    color: #000;
    font-family: 'Poppins';
    font-size: 2.2rem;
    
`

export const HowToSubtitle = styled.h2`
    font-size: 1.1rem;
    font-family: 'Poppins';
    font-weight: 500;
    text-align: left;
    margin-top: 0;
    margin-bottom: 2rem;
`

export const HowToBody = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;

    @media screen and (max-width: 541px) {
        grid-template-columns: 1fr;
    }
`
export const HowToText = styled.div`
    display: block;
    padding: 0 2rem;
` 

export const Text = styled.p`
    font-size: 1rem;
    font-family: 'Poppins';
    text-align:left;
    margin-bottom: 1.5rem;
`

export const TextNumber = styled.h1`
    font-size: 2.2rem;
    font-family: 'Poppins';
    color: #F140B9;
`

export const TextTitle = styled.h2`
    font-size: 1.8rem;
    font-family: 'Poppins';
`

export const HowToImage = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0.5rem 0 0.5rem 1rem;


    @media screen and (max-width: 541px) {
        padding: 2rem 0 0 0;
    }
     
` 

export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
`

export const ArrowForward = styled(MdArrowForward)`
    padding-top: 5px;
`