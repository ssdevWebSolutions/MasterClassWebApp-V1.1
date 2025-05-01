"use client"
import React, { useState } from "react";
import "../../../../assets/css/checkout.css";
import { Trash2 } from "lucide-react";


const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [orderItems, setOrderItems] = useState([
        { id: 1, name: "MRF Genius Bat", price: 8999, quantity: 2 },
        { id: 2, name: "SG Test Gloves", price: 2499, quantity: 1 },
        { id: 3, name: "Team Jersey", price: 1899, quantity: 1 },
      ]);

    const handlePaymentSelect = (method) => {
        setPaymentMethod(method);
    };
       

        const removeItem = (id) => {
            setOrderItems(orderItems.filter((item) => item.id !== id));
          };
        
          const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
          const shipping = 150;
          const tax = Math.round(subtotal * 0.18);
          const total = subtotal + shipping + tax;

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>

            <div className="checkout-section">
                <h2><b>Shipping Information</b></h2>
                <form className="shipping-form">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" placeholder="Enter your full name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" placeholder="Enter your email address" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" placeholder="Enter your phone number" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <textarea id="address" placeholder="Enter your street address" />
                    </div>

                    <div className="city-postal">
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input type="text" id="city" placeholder="Enter your city" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="postalCode">Postal Code:</label>
                            <input type="text" id="postalCode" placeholder="Enter postal code" />
                        </div>
                    </div>
                </form>
            </div>


            <div className="checkout-section">

  <h2><b>Order Summary</b></h2>
  {orderItems.map((item) => (
    <div key={item.id} className="order-item-row">
      <div className="order-item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-meta">₹{item.price.toLocaleString()} × {item.quantity}</span>
      </div>
      <Trash2 className="delete-icon" onClick={() => removeItem(item.id)} />
    </div>
  ))}
  <hr className="section-divider" />
  <div className="price-summary">
    <div><span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
    
    <div><span>Shipping</span><span>₹{shipping}</span></div>
   
    <div><span>Tax (GST 18%)</span><span>₹{tax}</span></div>

    <div className="total"><span>Total</span><span>₹{total.toLocaleString()}</span></div>
    <hr className="section-divider" />
  </div>
</div>

  

            <div className="checkout-section">
                <h2><b>Payment Method</b></h2>
                <div className="payment-methods">
                    {["Credit/Debit Card", "UPI Payment", "Cash on Delivery","Stripe"].map((method) => (
                        <label key={method} className={`payment-option ${paymentMethod === method ? "active" : ""}`}>
                            <input
                                type="radio"
                                name="payment"
                                value={method}
                                checked={paymentMethod === method}
                                onChange={() => handlePaymentSelect(method)}
                            />
                            {method}
                        </label>
                    ))}
                </div>
            </div>

            <div className="checkout-actions">
                <button className="return-btn">Return to Cart</button>
                <button className="place-order-btn">Place Order</button>
            </div>
        </div>
    );
};

export default Checkout;
