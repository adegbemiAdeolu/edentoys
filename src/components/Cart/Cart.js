import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { CartContainer, CartWrapper, CartBody, CartLeft, CartLeftWrapper, Name, Heading, CartRight, KeepShopping, Explore, ExploreHeading, ExploreTabs, ExploreTabsTwo, ExploreTabsThree, ExploreTabsOne } from './CartElements';
import CartProduct from './CartProduct';
import Subtotal from './Subtotal';

const Cart = () => {

    const [{ basket, user } ] = useStateValue();

    return (
        <CartContainer>

            <Explore>
                <ExploreHeading>
                    Explore product packages and keep shopping
                </ExploreHeading>
                <ExploreTabs>
                    <ExploreTabsOne>
                        <Link to="/bunny-box" style={{ textDecoration: 'none', color: '#000', }}>
                            <p>
                                Age: 0-5 Months
                            </p>
                        </Link>
                    </ExploreTabsOne>

                    <ExploreTabsTwo>
                        <Link to="/rabbit-box" style={{ textDecoration: 'none', color: '#000', }}>
                            <p>
                                Age: 6-8 Months
                            </p>
                        </Link>
                    </ExploreTabsTwo>

                    <ExploreTabsThree>
                        <Link to="/eagle-box" style={{ textDecoration: 'none', color: '#000', }}>
                            <p>
                                Age: 9-12 Months
                            </p>
                        </Link>
                    </ExploreTabsThree>
                </ExploreTabs>
            
            </Explore>

            <CartWrapper>
                <Name>
                    Hello, {user?.email}
                </Name>
                
                <Heading>
                    Your Shopping Cart
                </Heading>
                
                <CartBody>
                    <CartLeft>
                        <CartLeftWrapper>
                            {basket.map(item => (
                            <CartProduct
                                id={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                        </CartLeftWrapper>
                    </CartLeft>
                    <CartRight>
                        <Subtotal />
                    </CartRight>
                </CartBody>
            </CartWrapper>
        </CartContainer>
    )
}

export default Cart
