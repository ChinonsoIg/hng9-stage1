import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  

  return (
    <div className="contact_container">
      <h1 className="heading">Contact Me</h1>
      <p className="heading_description">Hi there, contact me to ask me about anything you have in mind.</p>
      <section>
        <form>
          <div className="form_container">
            <div className="name_container">
              <div className="flex_item">
                <label for="first_name">First name</label>
                <input
                  id="first_name"
                  type="text"
                  placeholder="Enter your first name"
                />
                <sub className={`${firstNameError ? "first_name_error" : "validation_erorr"}`}>{firstNameError}</sub>
              </div>
              <div className="flex_item">
                <label for="last_name">Last name</label>
                <input
                  id="last_name"
                  type="text"
                  placeholder="Enter your last name"
                />
                <sub className={`${lastNameError ? "last_name_error" : "validation_erorr"}`}>{lastNameError}</sub>
              </div>
            </div>
            <div className="flex_item">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="yourname@email.com" />
              <sub className={`${emailError ? "email_error" : "validation_erorr"}`}>{emailError}</sub>
            </div>
            <div className="flex_item">
              <label for="message">Message</label>
              <textarea id="message" type="text" placeholder="Send me a message and I'll reply you as soon as possible..." />
              <sub className={`${messageError ? "message_error": "validation_erorr"}`}>{messageError}</sub>
            </div>
            <div className="checkbox_item">
              <input type="checkbox" id="agree" name="agree" value="Agree" />
              <label for="agree">You agree to providing your data to Chinonso who may contact you.</label>
            </div>
          </div>
          <button type="submit" id="btn_submit">Send message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
