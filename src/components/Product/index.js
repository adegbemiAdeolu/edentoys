import React from 'react';
import { useStateValue } from '../../StateProvider';
import { TopSection, TopSectionVisuals, VideoWrapper, MyVideo, TopSectionContent, ContentTitle, ContentSubtitle, ContentPrice, ContentText, ContentButton } from '../BunnyBox/ProductElements';
import { Button } from '../ButtonElement';


const Product = ({id, title, subtitle, price, text, image}) => {
    
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                subtitle: subtitle,
                price: price,
                text: text,
                image: image,
            },
        });
    };

    return (
        <TopSection>
                    <TopSectionVisuals>
                        <VideoWrapper>
                            <MyVideo src={image} />
                        </VideoWrapper>
                    </TopSectionVisuals>
                    <TopSectionContent>
                        <ContentTitle>
                            {title}
                        </ContentTitle>
                        <ContentSubtitle>
                            {subtitle}
                        </ContentSubtitle>
                        <ContentPrice>
                            Price: NGN{price}
                        </ContentPrice>
                        <ContentText>
                            {text}
                        </ContentText>
                        <ContentButton>
                            <Button onClick={addToBasket}>
                                Add to Cart
                            </Button>
                        </ContentButton>
                    </TopSectionContent>
                </TopSection>
    )
}

export default Product
