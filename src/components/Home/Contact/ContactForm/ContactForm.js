import React, { useState } from 'react';

const ContactForm = () => {

    const [contact,setContact] = useState({});

    const handleBlur = (e) => {
        const newContact = {...contact};
        newContact[e.target.name] = e.target.value;
        setContact(newContact);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://salty-crag-70995.herokuapp.com/contactUs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(contact)
        })
    }

    return (
        <div className="col-lg-6">
            <form action="" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" onBlur={handleBlur} name="email" className="form-control" placeholder="Your email address"/>
                </div>
                <div className="form-group">
                    <input type="text" onBlur={handleBlur} name="name" className="form-control" placeholder="Your name / company’s name"/>
                </div>
                <div className="form-group">
                    <textarea name="message" onBlur={handleBlur} cols="30" rows="7" className="form-control" placeholder="Your message"></textarea>
                </div>

                <input type="submit" className="btn-brand" value="Send"/>

            </form>
        </div>
    );
};

export default ContactForm;