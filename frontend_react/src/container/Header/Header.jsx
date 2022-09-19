import React from 'react'
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-50, 5, 0], opacity: [0, 1] }}
      transition={{ duration: 0.75 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text name-head">YOUSSEF</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Devloper 💻</p>
          <p className="p-text">Designer 🎨</p>
          <p className="p-text">Front-end 👨‍💻</p>
        </div>
      </div>

    </motion.div>

    <motion.div
      whileInView={{opacity: [0, 1] }}
      transition={{ duration: 0.75, delayChildren: 0.5}}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
          whileInView={{scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut'}}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
      />
    </motion.div>
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.figma, images.react, images.python].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
        <img src={circle} alt="circle" />
      </div>
      ))}
    </motion.div>
    </div>
  )
}

export default Header