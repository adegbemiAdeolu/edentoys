import styled from 'styled-components';
// import { MdArrowForward } from 'react-icons/md';
import { IoCardOutline, IoBicycleOutline, IoPeopleOutline } from "react-icons/io5";


export const OfferContainer = styled.div`
    background: #fff;
    align-items: center;
    text-align: center;
    align-content: center;
    height: auto;
    padding-bottom: 3rem;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    } 

    @media screen and (max-width: 480px) {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`

export const OfferWrapper = styled.div`
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

    @media screen and (max-width: 480px) {
        display: block;
        padding-top: 0;
        margin-top: 0;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`

export const OfferWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const ImageWrapper = styled.div`
    width: 100%;
    padding: 1rem;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const BodyWrapper = styled.div`
    width: 100%;
    
`

export const BodyContent = styled.div`
    margin: 0 0 0 4rem;

    @media screen and (max-width: 768px) {
        margin: 0 0 0 3rem;
    }
`

export const Title = styled.h1`
    font-family: 'Poppins';
    font-weight: 700;
    line-height: 3rem;
    text-align: left;
    font-size: 2.2rem;
    margin-bottom: 2rem;


`

export const Body = styled.ul`
    text-align: left;
    margin-bottom: 5rem;
    margin-left: 2rem;

    @media screen and (max-width: 768px) {
        margin-left: 1rem;
        margin-bottom: 3rem;
    }
`

export const BodyText = styled.li`
    font-family: 'Poppins';
    font-size: 1rem;
    margin-bottom: 1rem;
`

export const IconContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 4rem;
    width: 80%;
    
`

export const IconText = styled.div`
    margin-right: 2rem;
`

export const Icon = styled.div`
    margin-bottom: 1rem;
    font-size: 4rem;
    
`

export const MyIcon = styled(IoCardOutline)`

` 

export const MyIcon2 = styled(IoBicycleOutline)`

` 

export const MyIcon3 = styled(IoPeopleOutline)`

` 

export const Text = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 700;    
`

export const BtnWrapper = styled.div`
    text-align: left;
    width: 50%;
    cursor: pointer;
    

    @media screen and (max-width: 768px) {
        width: 80%;
        text-align: center;
    }
`