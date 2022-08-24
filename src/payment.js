import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider'
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format"
import {getBasketTotal} from "./reducer"

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled]= useState(true);

    const handleSubmit = e => {
        //do all the fancy stripe stuff
    }
    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details 
        setDisabled(event.empty);
        setError(event.error? event.error.message:"")

    }

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

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value)=>{
                                    return <h3> Order Total: {value}</h3>
                                   }}
                                        decimalScale = {2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                            </button>
                        </div>

                        {/* Error Notification */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
            
           
        </div>
    </div>
  )
}

export default Payment