import React from 'react';
import { SignUpContainer, BackImageWrapper, BackImage, SignUpWrapper, SingUpWrap, SignUpText, Heading, Body, SignUpForm, SignUpFormTitle, SignUpFormTitleText } from './SignUpElements';
import background from '../../images/signup.jpg';
import FormTwo from '../MyForm/FormTwo';

const SignUpSection = () => {
    return (
        <SignUpContainer id="signup">
            <BackImageWrapper>
                <BackImage src={background} />
            </BackImageWrapper>
            
            <SignUpWrapper>
                <SingUpWrap>
                    <SignUpText>
                        <Heading>
                            We did all the research so you don't have to
                        </Heading>
                        <Body>
                            Sign up for Eden emails to receive activity ideas, helpful child development info, and exciting product updates.
                        </Body>
                    </SignUpText>
                    <SignUpForm>
                        <SignUpFormTitle>
                            <SignUpFormTitleText>
                                Fill the form below to get started.
                            </SignUpFormTitleText>
                        </SignUpFormTitle>
                        <FormTwo />
                    </SignUpForm>
                </SingUpWrap>
            </SignUpWrapper>
        </SignUpContainer>
    )
}

export default SignUpSection

