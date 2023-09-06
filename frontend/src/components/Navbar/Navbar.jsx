import React from "react";
import "./Navbar.scss";
import { Images } from "../../constants";
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={Images.logo} alt="" />
      </div>
      <ul>
        {["home", "about", "contact", "work", "skills", "contact"].map(
          (item) => (
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      {/* <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul> */}
    </nav>
  );
};

export default Navbar;
