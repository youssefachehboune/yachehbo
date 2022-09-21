import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { motion } from 'framer-motion';
const SocialMedia = () => {
  return (
    <motion.div
    className="app__social"
    whileInView={{ x: [-50, 0], opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
    >
        <a href="https://github.com/youssefachehboune" target="_blank" title="Github" rel="noopener noreferrer">
          <div>
                <FaGithub />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/youssef-achehboune-028643217" target="_blank" title="Linkedin" rel="noopener noreferrer">
          <div>
                <FaLinkedinIn />
          </div>
        </a>
        <a href="https://twitter.com/Youssef_Ach02" target="_blank" title="Twitter" rel="noopener noreferrer">
          <div>
                <BsTwitter />
          </div>
        </a>
    </motion.div>
  )
}

export default SocialMedia