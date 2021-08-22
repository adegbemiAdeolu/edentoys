import React from 'react';
import { Link } from 'react-router-dom';
import { OfferContainer, OfferWrapper, OfferWrap, ImageWrapper, Img, BodyWrapper, BodyContent, Title, Body, BodyText, IconContent, IconText, Icon, MyIcon, MyIcon2, MyIcon3, Text, BtnWrapper } from './OffersElements';
import image from '../../images/about2.jpg';
import { Button } from '../ButtonElement';

const Offers = () => {
    return (
        <OfferContainer>
            <OfferWrapper>
                <OfferWrap>
                    <ImageWrapper>
                        
                    </ImageWrapper>
                    <BodyWrapper>
                        <BodyContent>
                            <Title>
                                Affordable Montessori Toys for Babies. Delivered in a box.
                            </Title>
                            <Body>
                                <BodyText>
                                    Premium toys for kids handpicked by experts.
                                </BodyText>
                                <BodyText>
                                    All toys contain a badge of safety for kids.
                                </BodyText>
                                <BodyText>
                                    Toys that naturally follows the sensitive periods of your child and make growing up fast anf fun. 
                                </BodyText>                          
                            </Body>

                            <IconContent>
                                <IconText>
                                    <Icon>
                                        <MyIcon />
                                    </Icon>
                                    <Text>
                                        Secure Payment
                                    </Text>
                                </IconText>
                                <IconText>
                                    <Icon>
                                        <MyIcon2 />
                                    </Icon>
                                    <Text>
                                        Express Shipping
                                    </Text>
                                </IconText>
                                <IconText>
                                    <Icon>
                                        <MyIcon3 />
                                    </Icon>
                                    <Text>
                                        Ongoing Support
                                    </Text>
                                </IconText>
                            </IconContent>

                            <BtnWrapper>
                                <Button to="/shop">Shop Now</Button>
                            </BtnWrapper>
                        </BodyContent>
                    </BodyWrapper>
                
                </OfferWrap>
            </OfferWrapper>
        </OfferContainer>
    )
}

export default Offers
