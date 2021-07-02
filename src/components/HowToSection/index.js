import React from 'react';
import { HowToContainer, HowToWrapper, HowToTitle, HowToSubtitle, HowToBody, HowToText, Text, TextNumber, TextTitle, HowToImage, Img, ArrowForward } from './HowElements';
import image from '../../images/mygif.gif';
import { Link } from 'react-router-dom';

const HowToSection = () => {
    return (
        <HowToContainer id="how-it-works">
            <HowToWrapper>
                <HowToTitle>
                    How it works
                </HowToTitle>
                <HowToSubtitle>
                    Discover our science-backed approach to choosing great toys with intent!
                </HowToSubtitle>
                <HowToBody>
                    <HowToText>
                        <Text>
                            <TextNumber>1.</TextNumber> <TextTitle>Pick a Box.</TextTitle> The options are growth-targeted. This means you can choose based on the age of your child.
                        </Text> 
                        <Text>
                            <TextNumber>2.</TextNumber> <TextTitle>Place your Order.</TextTitle> We ship the moment your order is received. We make it even easier with our pay on delivery option.
                        </Text> 
                        <Text>
                            <TextNumber>3.</TextNumber> <TextTitle>Non-Stop Support.</TextTitle> We stay with you throughout the process of growth and offer tips to help your child grow.
                        </Text>                      
                        <Link to="/">Learn more about age-appropriate toys <span><ArrowForward /></span></Link>
                        
                        
                    </HowToText>
                    <HowToImage>
                        <Img src={image} />
                    </HowToImage>
                </HowToBody>
            </HowToWrapper>
        </HowToContainer>
            
    )
}

export default HowToSection
