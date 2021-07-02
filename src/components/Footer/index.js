import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to="/">
                                Home
                            </FooterLink>
                            <FooterLink to="/products">
                                About
                            </FooterLink>
                            <FooterLink to="/products">
                                Facebook
                            </FooterLink>
                            <FooterLink to="/products">
                                Instagram
                            </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Products
                            </FooterLinkTitle>
                            <FooterLink to="/">
                                0-6 Months
                            </FooterLink>
                            <FooterLink to="/products">
                                6-9 Months
                            </FooterLink>
                            <FooterLink to="/products">
                                9-12 Months
                            </FooterLink>
                            <FooterLink to="/products">
                                Products
                            </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Shop Now
                            </FooterLinkTitle>
                            <FooterLink to="/">
                                Shop
                            </FooterLink>
                            <FooterLink to="/products">
                                Cart
                            </FooterLink>
                            <FooterLink to="/products">
                                Terms of Service
                            </FooterLink>
                            <FooterLink to="/products">
                                Testimonials
                            </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
