import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <section className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 contact-leftSide">
                        <h2 className="contact-header">
                            Let us handle your 
                            <br/>
                            project, professionally.
                        </h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <ContactForm></ContactForm>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="copyright-text">copyright Orange labs 2020</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;