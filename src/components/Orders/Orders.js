import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../images/order.jpg'
import Footer from '../Footer'
import './Orders.css'


function Orders() {

    return (
        <div className="orderContainer">
            <div className="orderImage">
                <img src={image} alt='' />
            </div>
            <div className="orderWrapper">
                <div className="orderHeading">
                    <h2>Thank you. Your order is being processed for delivery</h2>
                    <small>Your order ID here</small>
                </div>
                <div className="orderBody">
                    <p>
                        You have taken a critical step in being delibrate about the growth of your child. You are raising a little genius and a great human being there.
                    </p>
                    <Link to="/" style={{fontFamily: 'Poppins', fontSize: '1.5rem', color: '#007F2E', fontWeight: '700' ,}}>
                        Click here to keep exploring
                    </Link>
                </div>
            </div>
        </div>
        
        
    )
}

export default Orders
