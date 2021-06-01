import React from 'react';
//email contact form and map 
function Contact() {
    //replace br's with bootstrap rows
    return (
        <div className="container">
            <h1>
                Contact us:
            </h1>
            <input type="text" value="name" />
            <br/>
            <input type="email" name="email" id="email" value="email"/>
            <br/>
            <input type="text" name="message" id="message" value="message"/>
            <br/>
            <button id="contact-button">Submit</button>
        </div>
    )
};

export default Contact;