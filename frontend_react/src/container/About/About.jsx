import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import {images} from '../../constants';

import './About.scss';

import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])
  
  return (
    <>
      <motion.h2 
        className="head-text"
        whileInView={{ x: [-100, 1, 0], opacity: [0, 1] }}
        transition={{ duration: 2, type: 'tween' }}
        >
        I'm just a
        <span> Developer </span>
        <br />
        who enjoys
        <span> Coding</span>
      </motion.h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ y: [50, -5, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            //transition={{ duration: 1, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About