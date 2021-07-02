import React from 'react';
import { useStateValue } from '../../StateProvider';
import './CartProduct.css';

function CartProduct({ id, image, title, subtitle, price }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="container">
            <div className="wrapper">
                <img className="cartImage" src={image} alt="" />
                <div className="bodyWrapper">
                    <h1 className="cartTitle">
                        {title}
                    </h1>
                    <h3 className="cartSubtitle">
                        {subtitle}
                    </h3>
                    <p className="cartPrice">
                        <small>NGN</small>
                        <strong>{price}</strong>
                    </p>
                    <button onClick={removeFromBasket}>
                        Remove from Cart
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default CartProduct
