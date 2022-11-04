import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <p className="contact_me">Contact Me</p>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
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
              </div>
              <div className="flex_item">
                <label for="last_name">Last name</label>
                <input
                  id="last_name"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="flex_item">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="yourname@email.com" />
            </div>
            <div className="flex_item">
              <label for="message">Message</label>
              <textarea id="message" type="text" placeholder="Send me a message and I'll reply you as soon as possible..." />
            </div>
            <div className="checkbox_item">
              <input type="checkbox" id="agree" name="agree" value="Agree" />
              <label for="agree">You agree to providing your data to Chinonso who may contact you.</label>
            </div>
          </div>
          <button id="btn_submit">Send message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
