import React from 'react';
import { IoVideocam } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import image from '../../images/howItWorks.jpg';
import otherImage from '../../images/howItWorks2.jpg';
import { ProductContainer, ProductWrapper, ContentButton2, BuyButton2, BottomSection, BottomWrapper, BottomTitle, BottomPoints, Point, BottomSubtitle, FeatureWrapper, Features, FeatureText, FeatureTitle, FeatureBody, FeatureImage, ImageWrapper, OtherProductsWrapper, OtherTitle, OtherBodyWrapper, OtherImageWrapper, OtherImage, OtherHeading, OtherSubtitle, OtherPrice, } from '../BunnyBox/ProductElements';
import Product from '../Product';

const ProductSection = () => {
    return (
        <ProductContainer>
            <ProductWrapper>
                <Product
                id="the_adventurer" 
                title="The Adventurer" 
                price={15000} 
                subtitle="9-12 Months" 
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
                                        Magic Tissue Box
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Babies love to pull tissues out and put them back in as they explore containment.
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
                                        Montessori Egg Cup
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Helps baby work on concentration and coordination.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Clear Tube with Stacking Rings
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Designed to teach concepts like containment and ring stacking.
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
                                        Feelings Book
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Introduces the child to common feelings and how they are expressed. This begins to build emotional intelligence in the child.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Sliding Top Box
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Build strength, hand-eye coordination and problem-solving skills.
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
                                        Opposites Balls
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Explore light versus heavy, floating versus sinking.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Smart Puzzles
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Each of the four included puzzles provide the perfect level of challenge for your child.
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
                                        Rocking Stacker
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Babies start stacking much later but with easy to grasp rings on a cone shaped peg, they are ready to start now. This one is for early stage.
                                    </FeatureBody>
                                </FeatureText>
                            </Features>

                            <Features>
                                <FeatureText>
                                    <FeatureTitle>
                                        Stable Stacker
                                    </FeatureTitle>
                                    <FeatureBody>
                                        Included rings of varying sizes requiring precision to grasp and thread, refining your child’s fine motor skills.
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
                            The Observer
                        </OtherHeading>
                        <OtherSubtitle>
                            0-5 months
                        </OtherSubtitle>
                        <OtherPrice>
                            Price: N15,000
                        </OtherPrice>
                        <ContentButton2>
                            <Link to="/bunny-box" style={{ textDecoration: 'none' }}>
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
