import React from 'react';
import { IoVideocam } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import image from '../../images/howItWorks.jpg';
import videoimage from '../../images/howItWorks2.jpg';
import otherImage from '../../images/howItWorks2.jpg';
import { ProductContainer, ProductWrapper, ContentButton2, BuyButton2, BottomSection, BottomWrapper, BottomTitle, BottomPoints, Point, BottomSubtitle, FeatureWrapper, Features, FeatureText, FeatureTitle, FeatureBody, FeatureImage, ImageWrapper, OtherProductsWrapper, OtherTitle, OtherBodyWrapper, OtherImageWrapper, OtherImage, OtherHeading, OtherSubtitle, OtherPrice, } from '../BunnyBox/ProductElements';
import Product from '../Product';

const ProductSection = () => {
    return (
        <ProductContainer>
            <ProductWrapper>
                <Product
                id="the_explorer" 
                title="The Explorer" 
                price={15000} 
                subtitle="6-8 Months" 
                text="The Montessori materials in Level 1 nurture your child’s visual skills, motor development, concentration, physical coordination, body awareness, and strength right from birth. With guidance from the videos and coaching included in this subscription, you’ll change the mobiles and activities that hang on the activity gym as your baby develops."
                image="./images/howItWorks2.jpg" 
                />
                <BottomSection>
                    <BottomWrapper>
                        <BottomTitle>
                            Developmental Goals
                        </BottomTitle>
                        <BottomPoints>
                            <Point>
                                Point 1
                            </Point>
                            <Point>
                                Point 2
                            </Point>
                            <Point>
                                Point 3
                            </Point>
                        </BottomPoints>
                        <BottomSubtitle>
                            What's inside the box
                        </BottomSubtitle>
                        <FeatureWrapper>
                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Rolling Drum
                                    </FeatureTitle>
                                    <FeatureBody>
                                        For practicing fine motor skills and reaching with both hands at once. Also, for visual excitement. As the drum rolls, the different colors of the rainbow give different visual engagement. This is with a rattle inside. So, it also stimulates the auditory sense. To develop hand-eyes coordination, wrist and arm strength.
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
                                        Rainbow Crinkle Paper
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Patterned rainbow crinkle paper for grasping, sound and visual stimulation.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Basket with Balls
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Varying textures, colors, and movement patterns on the surface of these balls provide the novelty needed to sustain body exploration.
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
                                        Rainbow Ball
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Cotton rainbow ball for cause and effect. Poses a new challenge in full-body coordination.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Silicone Ball
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Colourful silicone ball with light and sound effect. Also with spikes that provide a soothing teething effect.
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
                                        Parts of Me Book
                                    </FeatureTitle>
                                    <FeatureBody>
                                        A colorful book showing the major parts of the human body, to introduce the baby to different parts of her body.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Play Socks
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Socks with graspable balls. For developing leg strength and body control.
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
                                        Objects Texture Cards
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Images of common objects for further familiarization. Your child can play with the cards and get to know the objects.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Ball Drop Box
                                    </FeatureTitle>
                                    <FeatureBody>
                                        For building gross motor skills while learning that something can be there even when you can’t see it. For object permanence.
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
                                        Felt Ball Set
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Babies love balls. These balls are made to give the child a cold sensation and to show differences in temperature. For sensorial coordination and awareness.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Dinner Set
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Plate, cup, fork, spoon, knife. For fine motor skills, develop table etiquette etc.
                                    </FeatureBody>
                                </FeatureText>
                                <ImageWrapper>
                                    <FeatureImage src={image} />
                                </ImageWrapper>
                            </Features>
                        
                        </FeatureWrapper>
                        <ContentButton2>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <BuyButton2>
                                    Buy Now
                                </BuyButton2>
                            </Link>
                        </ContentButton2>
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
                            The Adventurer
                        </OtherHeading>
                        <OtherSubtitle>
                            9-12 months
                        </OtherSubtitle>
                        <OtherPrice>
                            Price: N15,000
                        </OtherPrice>
                        <ContentButton2>
                            <Link to="/eagle-box" style={{ textDecoration: 'none' }}>
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
