import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  // const [data, setData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   message: "",
  // });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   console.log(name);
  //   console.log("val: ",value);

  //   setData({
  //     ...data,
  //     [name]: value
  //   })

  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      return;
    }

    if (!firstName) {
      setFirstNameError("First name is required");
    }

    if (!lastName) {
      setLastNameError("Last name is required");
    }

    if (!email) {
      setEmailError("Email is required");
    }

    if (!message) {
      setMessageError("Please enter a message");
    }

    if (!firstName || !lastName || !email || !message) {
      return;
    }

    // console.log("data: ", { firstName, lastName, email, message });
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    alert("Success");

  };

  return (
    <div className="contact_container">
      <h1 className="heading">Contact Me</h1>
      <p className="heading_description">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <div className="name_container">
              <div className="flex_item">
                <label htmlFor="first_name">First name</label>
                <input
                  id="first_name"
                  type="text"
                  placeholder="Enter your first name"
                  defaultValue={firstName}
                  onChange={(e) => {
                    setFirstNameError("");
                    setFirstName(e.target.value);
                  }}
                />
                <sub
                  className={`${
                    firstNameError ? "first_name_error" : "validation_erorr"
                  }`}
                >
                  {firstNameError}
                </sub>
              </div>
              <div className="flex_item">
                <label htmlFor="last_name">Last name</label>
                <input
                  id="last_name"
                  type="text"
                  placeholder="Enter your last name"
                  defaultValue={lastName}
                  onChange={(e) => {
                    setLastNameError("");
                    setLastName(e.target.value);
                  }}
                />
                <sub
                  className={`${
                    lastNameError ? "last_name_error" : "validation_erorr"
                  }`}
                >
                  {lastNameError}
                </sub>
              </div>
            </div>
            <div className="flex_item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="yourname@email.com"
                defaultValue={email}
                onChange={(e) => {
                  setEmailError("");
                  setEmail(e.target.value);
                }}
              />
              <sub
                className={`${emailError ? "email_error" : "validation_erorr"}`}
              >
                {emailError}l
              </sub>
            </div>
            <div className="flex_item">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                type="text"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                defaultValue={message}
                onChange={(e) => {
                  setMessageError("");
                  setMessage(e.target.value);
                }}
              />
              <sub
                className={`${
                  messageError ? "message_error" : "validation_erorr"
                }`}
              >
                {messageError}
              </sub>
            </div>
            <div className="checkbox_item">
            <label htmlFor="agree" className="check">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                onChange={(e) => setIsChecked(!isChecked)}
                defaultValue={isChecked ? "agree" : "disagree"}

                className="checkmark"
              />
                <span></span>
                You agree to providing your data to Chinonso who may contact
                you.
              </label>
            </div>
          </div>
          <button type="submit" id="btn_submit" className={isChecked ? "active" : "disabled"}>
            Send message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
