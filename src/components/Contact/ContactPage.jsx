import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Contact Us</h1>
      <ContactForm />
    </motion.div>
  );
};

export default ContactPage;
