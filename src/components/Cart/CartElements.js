import styled from 'styled-components';

export const CartContainer = styled.div`
    background: #F5F2EF;
    align-items: center;
    text-align: center;
    align-content: center;
    max-height: auto;
    padding-bottom: 2rem;
    
    

    @media screen and (max-width: 820px) {
        padding: 1rem 0 0 0;
        margin: auto;
        
    }

    @media screen and (max-width: 481px) {
        
    }
`

export const KeepShopping = styled.p`
`


export const CartWrapper = styled.div`
    width: 75%;
    display: grid;
    margin: auto;
    

    @media screen and (max-width: 820px) {
        width: 95%;
    }

    @media screen and (max-width: 481px) {
        width: 90%;
    }
`

export const CartBody = styled.div`
    display: flex;
    margin-bottom: 2rem;

    @media screen and (max-width: 481px) {
        display: block;
    }
`

export const Name = styled.h3`
    margin: 1rem 0;
    padding-top: 1rem;
    font-size: 1rem;
    font-family: 'Poppins';
`

export const Explore = styled.div`
    width: 100%;
    padding-top: 2rem;

`

export const ExploreHeading = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    font-family: 'Poppins';

    @media screen and (max-width: 541px) {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }

`

export const ExploreTabs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 75%;
    margin: auto;
    justify-content: space-evenly;

    @media screen and (max-width: 541px) {
        width: 100%;
        
    }
`

export const ExploreTabsOne = styled.div`
    border-radius: 5px;
    background-color: #F140B9;
    margin: 1rem;
    padding: 1rem;
    white-space: nowrap;

    p {
        font-weight: 700;
        font-family: 'Poppins';
        padding: 0;
        margin: 0;
        font-size: 1rem;
    }

    @media screen and (max-width: 541px) {
        margin: auto;
        padding: 1rem 0.4rem;

    }

    @media screen and (max-width: 481px) {
        p {
            font-size: 0.8rem;
        }
        
    }
    
`

export const ExploreTabsTwo = styled.div`
    border-radius: 5px;
    background-color: #00AB5F;
    margin: 1rem;
    padding: 1rem;
    white-space: nowrap;

     p {
        font-weight: 700;
        font-family: 'Poppins';
        padding: 0;
        margin: 0;
        font-size: 1rem;
    }

    @media screen and (max-width: 541px) {
        margin: auto;
        padding: 1rem 0.4rem;
        
    }

     @media screen and (max-width: 481px) {
        p {
            font-size: 0.8rem;
        }
        
    }
`

export const ExploreTabsThree = styled.div`
    border-radius: 5px;
    background-color: #FBE86F;
    margin: 1rem;
    padding: 1rem;
    white-space: nowrap;

     p {
        font-weight: 700;
        font-family: 'Poppins';
        padding: 0;
        margin: 0;
        font-size: 1rem;
    }

    @media screen and (max-width: 541px) {
        margin: auto;
        padding: 1rem 0.4rem;
        
    }

    @media screen and (max-width: 481px) {
        p {
            font-size: 0.8rem;
        }
        
    }
`



export const Heading = styled.h1`
    display: block;
    width: 100%;
    margin: 0 0 2rem auto;
    font-family: 'Poppins';

    @media screen and (max-width: 481px) {
        margin: 1rem 0;
    }
`

export const CartLeft = styled.div`
    display: flex;
    width: 70%;
    padding: 2rem;
    margin-right: 2rem;
    background-color: #fff;
    border: 1px solid #dddddd;
    padding-bottom: 1rem;

    @media screen and (max-width: 820px) {
        padding: 1rem;
        width: 80%;
    }

    @media screen and (max-width: 481px) {
        width: 90%;
        margin-bottom: 2rem;
        margin: auto;
    }
    
`

export const CartLeftWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 80%;
    margin: auto;

    @media screen and (max-width: 820px) {
        width: 100%;
    }

`

export const CartRight = styled.div`
    display: flex;
    background-color: #fff;
    border: 1px solid #dddddd;
    padding-bottom: 1rem;

    @media screen and (max-width: 481px) {
        
        
    }
`
