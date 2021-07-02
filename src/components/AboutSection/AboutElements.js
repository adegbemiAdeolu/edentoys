import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #6CD2C4;
    align-items: center;
    text-align: center;
    align-content: center;
    height: auto;
    max-height: 1000px;
    position: relative;

    @media screen and (max-width: 820px) {
        max-height: 625px;
    }

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    } 

    @media screen and (max-width: 541px) {
        padding-top: 0.001rem;
        padding-bottom: 1.7rem;
        max-height: 625px;
    }

    @media screen and (max-width: 480px) {
        padding-top: 0.001rem;
        padding-bottom: 1.7rem;
        max-height: 1000px;
    }
` 

export const AboutWrapper = styled.div`
    width: 75%;
    display: block;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: 0 auto;
    height: 650px;
    max-height: 800px;
    padding-top: 5rem;

    @media screen and (max-width: 820px) {
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 3rem;
    }

    @media screen and (max-width: 480px) {
        display: block;
        padding-top: 0;
        margin-top: 0;
        margin-bottom: 0;
        padding-bottom: 0;
        height: 580px;
    }
` 
export const HeadingWrapper = styled.div`
    width: 100%;
    position: relative;
    


`

export const HeadingImage = styled.div`
    height: 12.5rem;
    position: absolute;
    overflow: hidden;
` 

export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

    @media screen and (max-width: 820px) {
        mask-image: linear-gradient(to center, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }
`


export const Heading = styled.h1`
    font-size: 2.2rem;
    line-height: 3rem;
    font-weight: 700;
    color: #000;
    font-family: 'Poppins'; 
    position: absolute;
    width: 100%;
    text-align: center;
    padding: 4.77rem 0;

    @media screen and (max-width: 541px) {
        padding: 4rem 2rem;
    }

    @media screen and (max-width: 480px) {
        padding: 3rem 1rem;
    }
    
`

export const BodyWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-width: 1100px;
    margin: 7.5rem auto 0 auto;
    padding: 1rem 0 0 1rem;
    background-color: #fff;
    justify-content: center;

    @media screen and (max-width: 820px) {
        margin-top: 11.5rem;
        padding: 0.5rem 0 0 0.5rem;
    }

    @media screen and (max-width: 481px) {
        grid-template-columns: 1fr 1fr;
        width: 100%;
        padding: 0.1rem 0 0 0.1rem;
    }
`

export const BodyOne = styled.div`
    height: 200px;
    background-color: #00AB5F;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #768E92;
        color: #FFF;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 820px) {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 480px) {
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
    }
`

export const BodyTwo = styled.div`
    height: 200px;
    background-color: #5BC6CE;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #768E92;
        color: #FFF;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 820px) {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 480px) {
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
    }
`

export const BodyThree = styled.div`
    height: 200px;
    background-color: #E6DAED;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #768E92;
        color: #FFF;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 820px) {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 480px) {
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
    }
`

export const BodyFour = styled.div`
    height: 200px;
    background-color: #DB2D55;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #768E92;
        color: #FFF;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 820px) {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 480px) {
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
    }
`

export const BodyFive = styled.div`
    height: 200px;
    background-color: #FCE965;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #768E92;
        color: #FFF;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 820px) {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }
    @media screen and (max-width: 480px) {
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
    }
`

export const BodySix = styled.div`
    height: 200px;
    background-color: #F579CE;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #768E92;
        color: #FFF;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 820px) {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 481px) {
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
    }
`

export const BodyHeading = styled.h2`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.3rem;
    padding: 3rem 1rem 1rem 1rem;

    @media screen and (max-width: 481px) {
        padding: 2rem 0.5rem 0.5rem 1rem;
    }  
`

export const BodyText = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1rem;
    padding: 0 0.5rem;

    @media screen and (max-width: 481px) {
        font-size: 0.8rem;
    }
`