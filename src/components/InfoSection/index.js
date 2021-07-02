import React from 'react';
import { InfoContainer, InfoWrapper,  Column, ContentWrapper, ImageWrapper, Image, HeadingWrapper1, HeadingWrapper2, HeadingWrapper3, HeadingImage, Img, Heading, IconWrapper,ArrowIcon, Text, InfoTitle, InfoSubTitle, Wrapper } from './InfoElements';
import imageOne from '../../images/bunny.jpeg';
import imageTwo from '../../images/rabbit.jpeg';
import imageThree from '../../images/eagle.jpeg';
import { Link } from 'react-router-dom';
import headImage1 from '../../images/t1.jpeg';
import headImage2 from '../../images/t2.jpeg';
import headImage3 from '../../images/t3.jpeg';

const InfoSection = () => {

    
    return (
        <>
            <InfoContainer id="products">
                <Wrapper>
                    <InfoTitle>
                        Find the perfect box
                    </InfoTitle>
                    <InfoSubTitle>
                        Choose the perfect box based on the age of your child and we will ship to your doorstep.
                    </InfoSubTitle>
                    <InfoWrapper>
                        <Link to="/bunny-box" style={{ textDecoration: 'none' }}>
                            <Column>
                                <ContentWrapper>
                                    <ImageWrapper>
                                        <Image src={imageOne} />
                                    </ImageWrapper>
                                    <HeadingWrapper1>
                                        <HeadingImage>
                                            <Img src={headImage1} />
                                        </HeadingImage>
                                        <Heading>
                                            Bunny Box 
                                        </Heading>
                                        <IconWrapper>
                                            <ArrowIcon />
                                        </IconWrapper>
                                    </HeadingWrapper1>
                                    <Text>
                                        For age 0 to 5 months
                                    </Text>
                                </ContentWrapper>
                            </Column>
                        </Link>

                        <Link to="/rabbit-box" style={{ textDecoration: 'none' }}>
                            <Column>
                                <ContentWrapper>
                                    <ImageWrapper>
                                        <Image src={imageTwo} />
                                    </ImageWrapper>
                                    <HeadingWrapper2>
                                        <HeadingImage>
                                            <Img src={headImage2} />
                                        </HeadingImage>
                                        <Heading>
                                            Rabbit Box 
                                        </Heading>
                                        <IconWrapper>
                                            <ArrowIcon />
                                        </IconWrapper>
                                    </HeadingWrapper2>
                                    <Text>
                                        For age 6 to 8 months
                                    </Text>
                                </ContentWrapper>
                            </Column>
                        </Link>

                        <Link to="/eagle-box" style={{ textDecoration: 'none' }}>
                            <Column>
                                <ContentWrapper>
                                    <ImageWrapper>
                                        <Image src={imageThree} />
                                    </ImageWrapper>
                                    <HeadingWrapper3>
                                        <HeadingImage>
                                            <Img src={headImage3} />
                                        </HeadingImage>
                                        <Heading>
                                            Eagle Box 
                                        </Heading>
                                        <IconWrapper>
                                            <ArrowIcon />
                                        </IconWrapper>
                                    </HeadingWrapper3>
                                    <Text>
                                        For age 9 to 12 months
                                    </Text>
                                </ContentWrapper>
                            </Column>
                        </Link>
                    </InfoWrapper>
                </Wrapper>
            </InfoContainer>
            
        </>
    )
}

export default InfoSection
