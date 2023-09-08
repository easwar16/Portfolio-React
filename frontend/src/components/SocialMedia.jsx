import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/easwar-harikaran-07764321b/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div>
        <a href="https://github.com/easwar16" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
