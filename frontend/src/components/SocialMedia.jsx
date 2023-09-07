import React from "react";
import { SocialIcon } from "react-social-icons";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/easwar-harikaran-07764321b/"
        />
      </div>
      <div>
        <SocialIcon network="github" url="https://github.com/easwar16" />
      </div>
    </div>
  );
}

export default SocialMedia;
