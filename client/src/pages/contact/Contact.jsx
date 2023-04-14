import React, { useState } from 'react';
import './contact.css';
// import axios from "axios";

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setError(false);
        // try {
        //     const res = await axios.put("/users/" + user._id, updatedUser);
        //     setSuccess(true);
        //   } catch (err) {
        //     console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        //   }
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />

            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
            ></textarea>

            <button type="submit">Send</button>
            </form>
        </div>
    );
}

