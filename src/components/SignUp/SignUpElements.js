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

export const BackImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: -2;
`

export const BackImage = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    /* mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); */
    position: relative;

    @media screen and (max-width: 541px) {
        mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }
`

export const SignUpWrapper = styled.div`
    width: 75%;
    display: block;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: auto;
    padding-top: 5rem;
    


    @media screen and (max-width: 820px) {
        width: 95%;
        padding-top: 3rem;
        padding-bottom: 3rem;
        
    }

    @media screen and (max-width: 481px) {
        display: block;
        padding-top: 0;
        margin-top: 0;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`

export const SingUpWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: auto;

     @media screen and (max-width: 820px) {
        width: 100%;
    }

    @media screen and (max-width: 481px) {
        grid-template-columns: 1fr;
    }
`

export const SignUpText = styled.div`
    padding: 10rem 1rem 0 1rem;

    @media screen and (max-width: 541px) {
        padding: 2rem 0 0 1rem;
    }

    @media screen and (max-width: 481px) {
        margin-bottom: 2rem;
        padding: 0 1.2rem;
    }
`

export const Heading = styled.h1`
    font-family: 'Poppins';
    font-weight: 700;
    line-height: 3rem;
    text-align: left;
    font-size: 2.2rem;
    margin-bottom: 2rem;

     @media screen and (max-width: 820px) {
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 481px) {
        text-align: center;
    }

`

export const Body = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: left;
    font-weight: 700;

    @media screen and (max-width: 481px) {
        text-align: center;
    }
`

export const SignUpForm = styled.div`
    margin: 1rem;

    @media screen and (max-width: 820px) {
        margin: 1rem;
    }

    @media screen and (max-width: 541px) {
        margin-top: 0;
    }


`

export const SignUpFormTitle = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 3rem;
`

export const SignUpFormTitleText = styled.h2`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;

    @media screen and (max-width: 820px) {
        font-size: 1rem;
    }
`