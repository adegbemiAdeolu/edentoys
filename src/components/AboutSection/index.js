import React from 'react';
import { AboutContainer, AboutWrapper, HeadingWrapper, Heading, BodyWrapper, BodyOne, BodyTwo, BodyThree, BodyFour, BodyFive, BodySix, BodyHeading, BodyText, HeadingImage, Img } from './AboutElements';
import image from '../../images/about.jpg';

const AboutUs = () => {
    return (
        <AboutContainer id="benefits">
            <HeadingWrapper>
                <HeadingImage>
                    <Img src={image} />
                </HeadingImage>
                <Heading>
                    Right Toys. Growth Catalysts.
                </Heading>
            </HeadingWrapper>

            <AboutWrapper>
                <BodyWrapper>
                    <BodyOne>
                        <BodyHeading>
                            Practical Life Skills
                        </BodyHeading>
                        <BodyText>
                            A child works from the tangible to the abstract. Taiolred toys enable this. 
                        </BodyText>
                    </BodyOne>

                    <BodyTwo>
                        <BodyHeading>
                            Language and Math
                        </BodyHeading>
                        <BodyText>
                            A child experiences the world through their hands and other senses.  
                        </BodyText>
                    </BodyTwo>

                    <BodyThree>
                        <BodyHeading>
                            Work as Play
                        </BodyHeading>
                        <BodyText>
                            Merging work and play for child. Play should not be done for the sake of it but for learning.
                        </BodyText>
                    </BodyThree>

                    <BodyFour>
                        <BodyHeading>
                            Concentration
                        </BodyHeading>
                        <BodyText>
                            Ability to focus and see things through. The first critical skill child develops
                        </BodyText>
                    </BodyFour>

                    <BodyFive>
                        <BodyHeading>
                            Positive Self Image
                        </BodyHeading>
                        <BodyText>
                            Problem solving skills boost child's confidence.
                        </BodyText>
                    </BodyFive>
                    <BodySix>
                        <BodyHeading>
                            Body-Mind Integration
                        </BodyHeading>
                        <BodyText>
                            Early learning helps the child turn thinking into action.
                        </BodyText>
                    </BodySix>
                </BodyWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutUs
