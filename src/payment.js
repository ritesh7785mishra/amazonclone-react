import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>
                Checkout (<Link to="/checkout">{basket?.length}</Link>)
            </h1>
            {/* Payment Section - delivery address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            {/* Review items  */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {/* all the products are shown here */}
                    {basket.map(item => (
                        <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}  
                        />
                    ))}
                </div>
            </div>
             {/* Payment Method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    {/* Stripe magic will go here */}
                </div>
            </div>
            
           
        </div>
    </div>
  )
}

export default Payment