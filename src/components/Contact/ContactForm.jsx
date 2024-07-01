import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import '../../styles/components/contactpage.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <label htmlFor="name">{t('name')}</label>
          <input id="name" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="form-input">
          <label htmlFor="email">{t('email')}</label>
          <input id="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-text">
          <label htmlFor="message">{t('message')}</label>
          <textarea
            id="message"
            {...register('message')}
            placeholder="Type message.."
          ></textarea>
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button type="submit">{t('submit')}</button>
      </form>
    </div>
  );
};

export default ContactForm;
