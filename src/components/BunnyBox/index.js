import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/howItWorks.jpg';
import otherImage from '../../images/howItWorks2.jpg';
import { Button } from '../ButtonElement';
import Product from '../Product';
import { ProductContainer, ProductWrapper, ContentButton2, BuyButton2, BottomSection, BottomWrapper, BottomTitle, BottomPoints, Point, BottomSubtitle, FeatureWrapper, Features, FeatureText, FeatureTitle, FeatureBody, FeatureImage, ImageWrapper, OtherProductsWrapper, OtherTitle, OtherBodyWrapper, OtherImageWrapper, OtherImage, OtherHeading, OtherSubtitle, OtherPrice, ContentButton } from './ProductElements';

const ProductSection = () => {

    return (
        <ProductContainer>
            <ProductWrapper>
                <Product 
                id="the_observer" 
                title="The Observer" 
                price={15000} 
                subtitle="0-5 Months" 
                text="The materials in the box help to coordinate the development of your child’s visual skills, motor development, concentration, physical coordination, body awareness, and strength right from birth. The toys are designed to follow the child's growth journey and be the catalysts that fastrack development."
                image="./images/shop1.jpg" 
                />
                
                <BottomSection>
                    <BottomWrapper>
                        <BottomTitle>
                            Developmental Goals
                        </BottomTitle>
                        <BottomPoints>
                            <Point>
                                For babies that are between 0 and 3 months as they consistently maintain wakefulness and demonstrate the ability to focus on nearby objects. The child’s actions start as reflex actions and develop to more purposeful ones as they grow
                            </Point>
                            <Point>
                                Concentration. This is the foundation for every learning. The child's vision is developed and deliberately encouraged to focus.
                            </Point>
                            <Point>
                                Between 4-6 months, the child begins to develop control, coordination and mastery. These form the foundation for leadership skills, especially self-leadership and discipline through effective engagement. The target is to develop the hands and core and to also stimulate parts of the senses; auditory, visuals, and hearing.
                            </Point>
                        </BottomPoints>
                        <BottomSubtitle>
                            What's inside the box
                        </BottomSubtitle>
                        <FeatureWrapper>
                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        The Activity Gym
                                    </FeatureTitle>
                                    <FeatureBody>
                                        For hanging toys and is adjustable for the different needs. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Contrast Shapes
                                    </FeatureTitle>
                                    <FeatureBody>
                                        For abstract concepts (mathematical shapes), visual coordination, concentration, and motor development. Suitable for babies of 3 to 6 weeks.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Contrast Cards
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Black and white visuals which is basically the only colors babies can see. Introduces babies to animals and objects they will get to know later. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Gobbi Balls
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Introduces color gradation and helps develop baby’s chromatic sense.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Octahedron
                                    </FeatureTitle>
                                    <FeatureBody>
                                        To introduce primary colors to be introduced at the right time. concentration, visual coordination. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Crinkle Papers (Different colors)
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Contrasting silhouette colors. To develop sensorial coordination including relationship between sound, touch, cause and effect.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Grasping Rattles
                                    </FeatureTitle>
                                    <FeatureBody>
                                        For grip control, cause and effect, especially between movement and sound. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Moving Dancers
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Advanced visual tracking. For visual coordination, motor skills, concentration.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Batting Ball
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Cause and effect and strengthen the connection between the right and left side of the brain. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Grasping Ring
                                    </FeatureTitle>
                                    <FeatureBody>
                                        To challenge the baby to reach and grasp.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Kicking Ball
                                    </FeatureTitle>
                                    <FeatureBody>
                                        To encourage the baby to play with their legs. This strengthens their feet, legs, knees, hips and core as they begin to coordinate their feet. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Crochet Ring
                                    </FeatureTitle>
                                    <FeatureBody>
                                        A rattle to help develop reflexes for grasping things. Develops strength, motor skills and body control.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Grasping toys with enclosed bells
                                    </FeatureTitle>
                                    <FeatureBody>
                                        For cause and effect, hand control and auditory sense. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Animal Book (from 4 months)
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Baby zoo for practicing reading with your baby and to build language and literacy learning.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Square Rattle
                                    </FeatureTitle>
                                    <FeatureBody>
                                        For developing grasp with both hands. Ideal for tactile, auditory and visual development. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Teether Ball
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Made with food grade silicone. For teething.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Cube Rattle
                                    </FeatureTitle>
                                    <FeatureBody>
                                        For a more refined and intentional hand movement. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Silicone Blocks
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Infant size blocks build math and spatial skills.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Rolling Bell
                                    </FeatureTitle>
                                    <FeatureBody>
                                        For coordinating senses: feeling, seeing, and hearing all at once. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Mirror Card
                                    </FeatureTitle>
                                    <FeatureBody>
                                        A little book like mirror.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Rainbow Beader Teether
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Silicone teether made of the seven colors for both teething and grasping. Hand-body coordination. 
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>

                            <Features>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                                <FeatureText>
                                    <FeatureTitle>
                                        Interlocking Discs
                                    </FeatureTitle>
                                    <FeatureBody>
                                        For hand-to-hand transfer. To build motor skills and cross-body coordination.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>
                        
                        </FeatureWrapper>
                        <ContentButton2>
                            <Link to="/cart" style={{ textDecoration: 'none' }}>
                                <BuyButton2>
                                    Buy Now
                                </BuyButton2>
                            </Link>
                        </ContentButton2>
                        <ContentButton>
                            <Button>
                                Add to Cart
                            </Button>
                        </ContentButton>
                    </BottomWrapper>
                </BottomSection>

                <OtherProductsWrapper>
                    <OtherTitle>
                        Find Related Products
                    </OtherTitle>
                    <OtherBodyWrapper>
                        <OtherImageWrapper>
                            <OtherImage src={otherImage} />
                        </OtherImageWrapper>
                        <OtherHeading>
                            The Explorer
                        </OtherHeading>
                        <OtherSubtitle>
                            5-8 months
                        </OtherSubtitle>
                        <OtherPrice>
                            Price: N15,000
                        </OtherPrice>
                        <ContentButton2>
                            <Link to="/rabbit-box" style={{ textDecoration: 'none' }}>
                                <BuyButton2>
                                    View More
                                </BuyButton2>
                            </Link>
                        </ContentButton2>
                    </OtherBodyWrapper>
                </OtherProductsWrapper>
            </ProductWrapper>    
        </ProductContainer>
    )
}

export default ProductSection
