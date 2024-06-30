import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>{t('contactus')}</h1>
      <ContactForm />
    </motion.div>
  );
};

export default ContactPage;
