import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import './Checkout.css'

const Checkout = () => {
    const submitMessage = () => toast("Congratulation! Your Appointment Confirmed")
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
                    <input type="text" placeholder="Your phone number" required />

                    <button onClick={submitMessage} className='submit-button' type="submit">submit</button>
                    <ToastContainer></ToastContainer>

                </div>
            </div>

        </form>
    );
};

export default Checkout;