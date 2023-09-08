import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };
    emailjs
      .sendForm(
        "service_rmgu1vm",
        "template_5id1kij",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          // client.create(contact);
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={Images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            hello@micael.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={Images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +1 (123) 456-7890
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form ref={form} onSubmit={handleSubmit}>
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text">
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
