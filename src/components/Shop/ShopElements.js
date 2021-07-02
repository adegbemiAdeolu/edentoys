import styled from 'styled-components'


export const MainContainer = styled.div`
    background-color: #FFFFFF;
    align-items: center;
    text-align: center;
    align-content: center;
    height: auto;
    padding-bottom: 3rem;

    @media screen and (max-width: 768px) {
        padding: 2rem 0;
    } 

    @media screen and (max-width: 541px) {
        padding : 2rem 0 0 0;
    }
`

export const ShopContainer = styled.div`
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

export const TopImageWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const TopImage = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

    @media screen and (max-width: 820px) {
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    } */

    @media screen and (max-width: 541px) {
        /* visibility: hidden; */
    }
`

export const TopSection = styled.div`
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

export const TopHeading = styled.h1`
    font-size: 2.2rem;
    line-height: 3.3rem;
    font-weight: 700;
    text-align: center;
    color: #000;
    font-family: 'Poppins';
    

    @media screen and (max-width: 768px) {
        text-align: left;
        width: 100%;
    }
`

export const Head = styled.div`
    display: block;
    padding: 2rem;
    font-size: 1rem;
    color: #FFFFFF;
    font-weight: 400;
`

export const ShopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 3rem 0;
    width: 75%;
    margin: auto;
    background-color: #FFFFFF;
`

export const ProductContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 30%;
    
`

export const MyProduct = styled.div`
    width: 100%;

`
export const Productt = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    background-color: #10069F;
    margin-top: 0.3rem;
    padding-right: 2rem;
    

    h1 {
            font-family: 'Poppins';
            font-weight: 700;
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
            text-align: left;
            color: #FFFFFF;
        }
    
    
`

export const IConWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    background-color: #FFFFFF;
    border: 2px solid #E2E2E2;
    border-radius: 50px;
    align-items: center;
    align-content: center;
    padding: 0.6rem;

    span {
        align-self: center;
        cursor: pointer;
    }
`

export const ProductContent = styled.div`
    background-color: #65ECFE;
    width: 80%;
    margin: auto;
    padding: 2rem 1rem;
    
`

export const UpperSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`

export const LongText = styled.p`
    font-size: 1rem;
    width: 50%;
    margin: auto;
    text-align: center;
    color: #000;
    font-family: 'Poppins';
    margin-bottom: 0.5rem;
`

export const LowerSection = styled.div`
    width: 100%;
    margin-bottom: 3rem;
`

export const LowerHeading = styled.h2`
    font-size: 2rem;
    margin: 2rem auto;
    font-family: 'Poppins';
`

export const ProductPrice = styled.h3`
    font-size: 1.1rem;
    font-family: 'Poppins';
    margin-bottom: 1rem;
`

export const ButtonWrapper = styled.div`
    width: 30%;
    margin: auto;
`

export const ToysWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;
`

export const ToysImageWrapper = styled.div`

`

export const ToysImage = styled.div`

`

export const ToyText = styled.div`
    padding: 1rem 1rem 1rem 4rem;

`

export const TextTitle = styled.h3`
    margin-bottom: 1rem;
    text-align: right;
    font-family: 'Poppins';
`

export const ToyDesc = styled.p`
    font-size: 1rem;
    text-align: right;
    font-family: 'Poppins';
`






