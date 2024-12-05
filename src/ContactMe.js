import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css"

export default function ContactMe() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setStateMessage("Message sent!");
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                },
                (error) => {
                    setStateMessage("Something went wrong, please try again later.");
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                }
            );
        e.target.reset();
    };

    return (
    <div className="ContactMe-container">
      <h3 className="contactme-header">Contact Me</h3>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required placeholder="John Doe" />
        <label>Email</label>
        <input type="email" name="user_email" required placeholder="email@gmail.com" />
        <label>Message</label>
        <textarea name="message" required placeholder="Please type your message here"></textarea>
        <input
          type="submit"
          value={isSubmitting ? "Sending..." : "Send"}
          disabled={isSubmitting}
        />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    </div>
    );
}
