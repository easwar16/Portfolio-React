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

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rmgu1vm",
        "template_3z5shhy",
        form.current,
        "TN4oBpE6KzPxC3QCk"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormSubmitted(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">
        Take a coffee & <span>chat with me</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={Images.email} alt="email" />
          <a href="mailto:easwarharikaran1610@gmaill.com" className="p-text">
            easwarharikaran1610@gmaill.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={Images.mobile} alt="phone" />
          <a href="tel:+91 (9789027597)" className="p-text">
            +91 (9789027597)
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          ref={form}
          className="app__footer-form app__flex"
          onSubmit={sendEmail}
        >
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={username}
              onChange={handleChangeInput}
              name="user_name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="user_email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              value={message}
              placeholder="Your Message"
              onChange={handleChangeInput}
              name="message"
            />
          </div>
          <input
            className="p-text button"
            type="submit"
            value={!loading ? "Send Message" : "Sending..."}
          />
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
