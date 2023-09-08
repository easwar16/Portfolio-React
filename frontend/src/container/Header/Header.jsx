import React from "react";
import { easeInOut, motion } from "framer-motion";

import { AppWrap } from "../../Wrapper";
import { Images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: { duration: 1, ease: easeInOut },
  },
};

const Header = () => (
  <div id="home" className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div>
            <p className="p-text">Hello, My Name is </p>

            <h1 className="">
              <span>🙌</span>Easwar
            </h1>
          </div>
        </div>
        <div className="tag-cmp app_flex">
          {/* <h2 className="">A lil insight</h2> */}
          <p className="p-text">
            I am a Coding enthusiast with a flair for front-end magic and a
            knack for full-stack wizardry.
          </p>

          {/* <p className="p-text">
            
          </p> */}
        </div>
      </div>
    </motion.div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={Images.profile} alt="profile_bg" />
    </motion.div>
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[Images.flutter, Images.redux, Images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="circle" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
