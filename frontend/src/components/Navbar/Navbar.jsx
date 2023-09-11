import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { DarkMode } from "../../components";
import "./Navbar.scss";
import { Images } from "../../constants";

const PDF_FILE_URL = "http://localhost:3000/Resume.pdf";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Images.logo} alt="logo" />
      </div>
      <div className="app__navbar-toggle">
        <DarkMode />
      </div>
      <div className="app__navbar-resume-btn">
        <button
          onClick={() => {
            downloadFileAtURL(PDF_FILE_URL);
          }}
        >
          Resume
        </button>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p_text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonials",
                "contact",
              ].map((item) => (
                <li className="app__flex p_text" key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
