import React, { useState } from 'react'
import { Data } from './Data'
import { ShopContainer, ShopWrapper, TopSection, TopHeading, TopImageWrapper, TopImage, MainContainer, ProductContainer, Productt, ProductContent, Head, IConWrapper } from './ShopElements'
import { IconContext } from 'react-icons'
import { IoArrowDownOutline, IoArrowUpOutline, } from 'react-icons/io5'
import image from '../../images/shop1.jpg'
import ProductSection from '../BunnyBox'


function Shop() {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }
    return (
        <IconContext.Provider value={{ color: '#00F', size: '2.2rem'}}>
            <MainContainer>
                <ShopContainer>
                    <TopImageWrapper>
                        <TopImage src={image} />
                    </TopImageWrapper>
                    <TopSection>
                        <TopHeading>
                            Choose the perfect product here
                        </TopHeading>
                    </TopSection> 
                </ShopContainer>

                <ShopWrapper>
                    <ProductContainer>
                        {Data.map((item, index) => {
                            return (
                                <>
                                <Productt>
                                    <Head>
                                        <h1>{item.title}</h1>
                                        <p>{item.subtitle}</p>
                                    </Head>
                                    <IConWrapper>
                                        <span onClick={() => toggle(index)} key={index}>
                                            {clicked === index ? (<IoArrowUpOutline />) : (<IoArrowDownOutline /> )}
                                        </span>
                                    </IConWrapper>
                                    
                                </Productt> 
                                {clicked === index ? (
                                        <ProductContent>
                                            <ProductSection />
                                        </ProductContent>
                                    ) : null}                                 
                                </>                           
                            )
                        })}
                    </ProductContainer>
                </ShopWrapper>
            </MainContainer>
        </IconContext.Provider>
        
            
        
    )
}

export default Shop
