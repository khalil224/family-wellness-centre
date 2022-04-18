import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Checkout.css'

const Checkout = () => {
    return (

        <form >
            <div className="checkout-container">
                <div className="brand-title">Appointment Confirm</div>
                <div className="inputs">
                    <label>YOUR NAME</label>
                    <input type="text" placeholder="Your Name" />
                    <label>EMAIL</label>
                    <input type="email" placeholder="Enter Your Email" required />
                    <label>Phone</label>
                    <input type="number" placeholder="Your phone number" required />

                    <button className='signup-button' type="submit">submit</button>


                </div>
            </div>

        </form>
    );
};

export default Checkout;