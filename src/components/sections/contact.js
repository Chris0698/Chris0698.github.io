import React from "react";

const Contact = function() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p>You can contact me from email or mobile number, however it is best to ring after 12:00 if calling my mobile number.</p>
            <p>Email: <a className="emailLink" href="mailto:Email: chris.aston98@outlook.com">chris.aston98@outlook.com</a></p>
            <p>Mobile number: 07842 529830</p>
            <p><a href="https://www.linkedin.com/in/chris-aston-45b4a3202/" target="_blank" rel="noopener no referrer" className="linkedInButton">LinkedIn Profile</a></p>
        </section>
    );
};

export default Contact;