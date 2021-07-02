import styled from 'styled-components';


export const ProductContainer = styled.div`
    background: #fff;
    align-items: center;
    text-align: center;
    align-content: center;
    height: auto;
    

    @media screen and (max-width: 820px) {
        padding: 1rem 0 0 0;
        margin: auto;
    }
`

export const ProductWrapper = styled.div`
    width: 75%;
    display: block;
    margin: 0 auto;
    padding: 3rem 0 0 0;

    @media screen and (max-width: 820px) {
        width: 95%;
        padding: 0;
        margin: auto;
    }
`

export const TopSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;

    @media screen and (max-width: 541px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 481px) {
        margin-top: 1rem;
    }
`

export const TopSectionVisuals = styled.div`
    @media screen and (max-width: 541px) {
        margin-bottom: 2rem;
    }
`

export const VideoWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    
` 

export const MyVideo = styled.img`
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const TopSectionContent = styled.div`
    display: block;
    padding: 0 0 0 3rem;

    @media screen and (max-width: 541px) {
        padding: 0;        
    }
`

export const ContentTitle = styled.h1`
    font-family: 'Poppins';
    text-align: left;
    font-size: 2.5rem;
    

    @media screen and (max-width: 541px) {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 0.5rem;
    }
    
`

export const ContentSubtitle = styled.h3`
    font-family: 'Poppins';
    text-align: left;
    font-size: 1.5rem;
    

    @media screen and (max-width: 541px) {
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 0.5rem;
    }
    
`

export const ContentPrice = styled.h3`
    font-family: 'Poppins';
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 541px) {
        font-size: 1.3rem;
        text-align: center;
    }
   
`

export const ContentText = styled.p`
    font-family: 'Poppins';
    text-align: left;
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.5625rem;

    @media screen and (max-width: 541px) {
        font-size: 0.9rem;
        text-align: center;
        line-height: 1.5rem;
    }

    @media screen and (max-width: 481px) {
        padding: 0 1rem;
    }
`

export const ContentButton = styled.div`
    display: flex;

    @media screen and (max-width: 541px) {
        margin: auto;
        display: block;
        
    }
` 

export const BuyButton = styled.div`
    display: flex;
    cursor: pointer;
    border-radius: 50px;
    padding: 1rem 2rem;
    font-weight: 700;
    text-align: center;
    background-color: #007F2E;
    text-decoration: none;
    white-space: none;
    font-family: 'Poppins';
    color: #fff;

    &:hover {
        background-color: #fff;
        color: #000;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 541px) {
        width: 200px;
        padding: 0.5rem 0.6rem;
        text-align: center;
        justify-content: center;
        margin: auto;
    }

`

export const BottomSection = styled.div`
    width: 100%;
    
`

export const BottomWrapper = styled.div`
    width: 100%;
    margin: 3rem 0 4rem 0;
`

export const BottomTitle = styled.h1`
    font-family: 'Poppins';
    text-align: left;
    margin-bottom: 1rem;

    @media screen and (max-width: 820px) {
        margin-left: 1rem;
    }

    @media screen and (max-width: 541px) {
        font-size: 1.6rem;
        margin-left: 0;
        text-align: center;
    }
`

export const BottomPoints = styled.ul`
    font-family: 'Poppins';
    text-align: left;
    margin: 0 0 2rem 1rem;

    @media screen and (max-width: 820px) {
        margin-left: 3rem;
    }

    @media screen and (max-width: 541px) {
        margin-left: 2rem;
    }
`

export const Point = styled.li`
    font-family: 'Poppins';
    text-align: left;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 541px) {
        font-size: 0.8rem;
    }
`

export const BottomSubtitle = styled.h1`
    font-family: 'Poppins';
    text-align: left;
    margin: 2rem;

    @media screen and (max-width: 820px) {
        margin-left: 1rem;
    }

    @media screen and (max-width: 541px) {
        font-size: 1.6rem;
        text-align: center;
    }
`

export const FeatureWrapper = styled.div`
    width: 70%;
    display: block;
    margin: auto;

    @media screen and (max-width: 769px) {
        width: 85%;
    }

    @media screen and (max-width: 541px) {
        width: 100%;
    }
`

export const Features = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 0;

   @media screen and (max-width: 481px) {
        margin: 0 0 2rem 0;
    }
`

export const FeatureText = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    align-items: center;
    text-align: center;
`

export const FeatureTitle = styled.h3`
    font-family: 'Poppins';
    text-align: left;
    margin: 1rem;

    @media screen and (max-width: 769px) {
        margin-bottom: 0;
    }
`

export const FeatureBody = styled.p`
    font-family: 'Poppins';
    text-align: left;
    margin: 0 1rem;

    @media screen and (max-width: 541px) {
        font-size: 0.8rem;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: 1rem;

     @media screen and (max-width: 769px) {
        padding: 2rem;
    }

    @media screen and (max-width: 481px) {
        padding: 1rem;
        align-items: center;
    }
`

export const FeatureImage = styled.img`
    width: 10rem;
    height: 10rem;
    -o-object-fit: cover;
    object-fit: cover;

     @media screen and (max-width: 769px) {
        width: 13rem;
        height: 13rem;
    }

    @media screen and (max-width: 481px) {
        width: 10rem;
        height: 10rem;
        align-items: center;
    }
`

export const OtherProductsWrapper = styled.div`
    width: 100%;
    background-color: #FDEEE9;
    margin: 0;
    padding: 2rem 0 3rem 0;
`

export const OtherTitle = styled.h1`
    font-family: 'Poppins';
    font-size: 2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 541px) {
        font-size: 1.625rem;
    }
    
`

export const OtherBodyWrapper = styled.div`
    width: 40%;
    margin: auto;
    background-color: #fff;
    padding-bottom: 2rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 820px) {
        width: 60%;
    }

     @media screen and (max-width: 541px) {
        width: 70%;
    }
`

export const OtherImageWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: 3rem;

     @media screen and (max-width: 769px) {
        padding: 2rem;
    }

    @media screen and (max-width: 481px) {
        padding: 1rem;
        align-items: center;
    }
`

export const OtherImage = styled.img`
    width: 10rem;
    height: 10rem;
    -o-object-fit: cover;
    object-fit: cover;

     @media screen and (max-width: 769px) {
        width: 13rem;
        height: 13rem;
    }

    @media screen and (max-width: 481px) {
        width: 10rem;
        height: 10rem;
        align-items: center;
    }

     @media screen and (max-width: 541px) {
        width: 8rem;
        height: 8rem;
    }
`

export const OtherHeading = styled.h1`
    margin-top: 0;
    font-family: 'Poppins';
    margin-bottom: 0;
    
     @media screen and (max-width: 541px) {
        font-size: 1.4rem;
    }
`

export const OtherSubtitle = styled.h3`
    margin-top: 0;
    font-family: 'Poppins';
    margin-bottom: 0;

     @media screen and (max-width: 541px) {
        font-size: 1.2rem;
        
    }
`

export const OtherPrice = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Poppins';
    margin-bottom: 2rem;

     @media screen and (max-width: 541px) {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
    }
`

export const ContentButton2 = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;

    @media screen and (max-width: 541px) {
       
        
    }
` 

export const BuyButton2 = styled.div`
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    padding: 1rem 4rem;
    font-weight: 700;
    text-align: center;
    background-color: #007F2E;
    text-decoration: none;
    white-space: none;
    font-family: 'Poppins';
    color: #fff;

    &:hover {
        background-color: #fff;
        color: #000;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 541px) {
        width: 200px;
        padding: 0.5rem 0.6rem;
        text-align: center;
        justify-content: center;
        margin: auto;
    }

`