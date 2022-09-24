import React, { useState} from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap  } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  var nm = document.getElementById("name");
  var ml = document.getElementById("mail");
  var msg = document.getElementById("msg");

  const handleChangeInput = (e) => {
    nm.classList.remove("error");
    ml.classList.remove("error");
    msg.classList.remove("error");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  
  const handleSubmit = (e) => {
    setLoading(true);
    if(!name || !email || !message)
    {
      setLoading(false);
      if (!name)
        nm.classList.add("error");
      if (!email)
        ml.classList.add("error");
      if (!message)
        msg.classList.add("error");
      e.preventDefault();
    }
    else
    {
        const contact = {
        _type: 'contact',
        name: name,
        email: email,
        message: message,
      }

      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
      }
    
  }

  return (
    <>
      {!isFormSubmitted ? 
      <motion.h2 className="head-text" 
      whileInView={{ x: [-100, 1, 0], opacity: [0, 1] }}
      transition={{ duration: 2, type: 'tween' }}
      >
      Take a coffe & <span>chat with me</span>
      </motion.h2> 
      :
      <h2 className="head-text" >Take a coffe & <span>chat with me</span></h2> 
      }
      <motion.div className="app__footer-cards" 
      whileInView={{ y: [-100, 1, 0], opacity: [0, 1] }}
      transition={{ duration: 2, type: 'tween' }}
      >
        <div className="app__footer-card">
          <img src={images.mail} alt="Email"/>
          <a href="mailto:achehboune949@gmail.com" title="mail" className="p-text">achehboune949@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="WhatsApp"/>
          <a href="https://wa.me/212609228921" target="_blank" title="WhatsApp" rel="noopener noreferrer" className="p-text">+212 (609) 228-921</a>
        </div>
      </motion.div>

      {!isFormSubmitted ?
      <motion.div className="app__footer-form app__flex"  
      whileInView={{ y: [100, -1, 0], opacity: [0, 1] }}
      transition={{ duration: 2, type: 'tween' }}
      >
        <div className="app__flex" id='name'>
          <input
              className="p-text"
              type="text"
              placeholder="Your Name*"
              name="name"
              value={name}
              onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex" id='mail'>
          <input
              className="p-text"
              type="email"
              placeholder="Your Email*"
              name="email"
              value={email}
              onChange={handleChangeInput}
          />
        </div>
        <div id='msg'>
          <textarea 
            className="p-text"
            placeholder="Your Message*"
            value={message}
            name="message"
            onChange={handleChangeInput}
            required
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </motion.div>
      : <div>
        <h3 className="head-text">Thank you for getting in touch!</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(
  Footer,
  'contact',
  "app__whitebg"
  );