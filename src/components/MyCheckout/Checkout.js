import React, { useEffect, useState } from 'react'
import { PaystackButton } from 'react-paystack';
import { useStateValue } from '../../StateProvider';
import CartProduct from '../Cart/CartProduct';
import { getBasketTotal } from '../../reducer';
import './MyCheckout.css';
import { useHistory } from 'react-router';
import axios from 'axios';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        
        getClientSecret();
    }, [basket])

    const handleSubmit = e => {

    }


    //Paystack below//
 //  Real Key:  pk_live_0588d2f699b3fde9e09ebe02b0a828c79f2ddf70

    const publicKey = "pk_test_fa4da41ec77062cdb992a30c7d25a77bf3901d4f"
    const amount = `${getBasketTotal(basket) * 100}`
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const componentProps = {  
        email,
        amount,
        metadata: {
            name,
            phone,
            address,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () => 
            dispatch({
            type: 'EMPTY_BASKET'
            })
            (history.replace('/orders')),
              
    
        onClose: () =>
            alert("Wait! Your little giant needs this, don't go!!!!"),

    }

    //End of Paystack functions//

    

    return (
        <div className='checkoutContainer'>
            <div className='checkoutWrapper'>
                <div className='checkoutHeading'>
                    <h1>Checkout here</h1>
                </div>
        
                <div className='checkoutItems'>
                {basket.map(item => (
                    <CartProduct 
                        id={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        image={item.image}
                        price={item.price}
                        />
                )
                )} 
                </div>

                <div className='checkoutSummary'>
                <div className='summaryHeading'>
                    <h2>
                        Payment Information
                    </h2>
                </div>
                <div className="checkout-form" onSubmit={handleSubmit}>
                    <div className="checkout-field">
                        <label>Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="checkout-field" required>
                        <label>Email</label>
                        <input
                            type="text"
                            id="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="checkout-field">
                        <label>Phone</label>
                        <input
                            type="text"
                            id="phone"
                            required
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="checkout-field">
                        <label>Delivery Address</label>
                        <input
                            type="text"
                            id="address"
                            required
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <PaystackButton className="paystack-button" {...componentProps} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
