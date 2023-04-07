import React, { useState } from "react";
import styles from './Form.module.css';
import Contacthero from "./Contacthero";
import image1 from "./contact.webp"; 
import Footer from "../Footer/Footer";

export default function ContactUs(){

    // Define state variables for form input fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form validation
        if (firstName === "" || lastName === "" || email === "" || comment === "") {
            alert("Please fill in all required fields.");
        } else {
            // Pop up alert
            alert("Form submitted successfully.");
        }
    }

    // Render the component
    return (
        <div style={{ backgroundImage:`url(${image1})` }}>
            <Contacthero/>
            {/* Render the form with input fields and submit button */}
            <form className={styles.gridBox} onSubmit={handleSubmit}>
                <input type="text" id="firstName" name="firstName" placeholder="First name" aria-label="First name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required/>
                <input type="text" id="lastName" name="lastName" placeholder="Last name" aria-label="Last name" value={lastName} onChange={(event) => setLastName(event.target.value)} required/>
                <input type="email" id="email" name="email" placeholder="Email address" aria-label="Email address" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                <textarea id="comment" name="comment" placeholder="Comment" aria-label="Comment" value={comment} onChange={(event) => setComment(event.target.value)} rows="3" required></textarea>

                <button type="submit">Submit</button>
            </form>
            <Footer/>
        </div>
    
    );
}
