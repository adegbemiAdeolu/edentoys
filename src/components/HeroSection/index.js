import React, {useState} from 'react';
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroSpan, HeroP, HeroPSpan, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import HeroImage from '../../images/heroo.jpg';
import { Button } from '../ButtonElement';



const HeroSection = () => {
    const [hover, setHover] =useState(false) 

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImageBg src={HeroImage}>
                </ImageBg>
            </HeroBg>

            <HeroContent>
                <HeroH1>
                     Play meets <HeroSpan>Learning</HeroSpan>
                </HeroH1>

                <HeroP>
                    Every toy your 0-12 months old child needs to master life; <HeroPSpan>delivered in a box</HeroPSpan>.
                </HeroP>

                <HeroBtnWrapper>
                    <Button to="/shop" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get a Box {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>            
        </HeroContainer>

        

    )
}

export default HeroSection
