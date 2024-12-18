import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { EarthCanvas } from '../canvas'
import { SectionWrapper } from '../../hoc'
import { slideIn } from '../../utils/motion'
import {
  CONTACT_CONTAINER_CLASSES,
  CONTACT_CONTAINER_MOTION_CLASSES,
  CONTACT_FORM_CLASSES,
  CONTACT_FORM_DEFAULT_VALUES,
  CONTACT_FORM_FIELD_WRAPPER_CLASSES,
  CONTACT_FORM_INPUT_CLASSES,
  CONTACT_FORM_LABELS,
  CONTACT_FORM_LABEL_CLASSES,
  CONTACT_HEADTEXT_CLASSES,
  CONTACT_SUBTEXT_CLASSES,
  EARTH_CONTAINER_MOTION_CLASSES,
  EMAILJS_KEYS, SEND_BUTTON_CLASSES
} from './constants'
import { my_global_info } from '../../constants'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '../Modal'

const Contact = () => {
  const formRef = useRef();
  const { t } = useTranslation();
  const [form, setForm] = useState(CONTACT_FORM_DEFAULT_VALUES)
  const [loading, setLoading] = useState<boolean>(false)
  const [showError, setShowError] = useState(false);
  const { serviceId, templateId, publicKey } = EMAILJS_KEYS

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        to_name: my_global_info.name,
        from_email: form.email,
        to_email: my_global_info.email,
        message: form.message
      },
      publicKey
    )
      .then(() => {
        setLoading(false)
        alert(t('constact.succes_message'))
        setForm(CONTACT_FORM_DEFAULT_VALUES)
      }, (error) => {
        setLoading(false)
        console.error(`${t('constact.fail_message')}: ${error}`)
        setShowError(true)
      })
  }

  return (
    <div className={CONTACT_CONTAINER_CLASSES}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className={CONTACT_CONTAINER_MOTION_CLASSES}
      >
        <p className={CONTACT_SUBTEXT_CLASSES}>{t('contact.sub_text')}</p>
        <h3 className={CONTACT_HEADTEXT_CLASSES}>{t('contact.head_text')}</h3>
        <form
          onSubmit={handleSubmit}
          className={CONTACT_FORM_CLASSES}
        >
          {Object.keys(CONTACT_FORM_LABELS).map(key => (
            <label className={CONTACT_FORM_FIELD_WRAPPER_CLASSES} key={key}>
              <span className={CONTACT_FORM_LABEL_CLASSES}>{t(`contact.${CONTACT_FORM_LABELS[key].label}`)}</span>
              {key === 'message' ? (
                <textarea
                  rows={7}
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  placeholder={t(`contact.${CONTACT_FORM_LABELS[key].placeholder}`)}
                  className={CONTACT_FORM_INPUT_CLASSES}
                />
              ) : (
                <input
                  type='text'
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  placeholder={t(`contact.${CONTACT_FORM_LABELS[key].placeholder}`)}
                  className={CONTACT_FORM_INPUT_CLASSES}
                />
              )}
            </label>
          ))}
          <button
            type="submit"
            className={SEND_BUTTON_CLASSES}
          >
            {loading ? t('contact.sending') : t('contact.send')}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className={EARTH_CONTAINER_MOTION_CLASSES}
      >
        <EarthCanvas />
      </motion.div>
      {showError && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setShowError(false)} // Close modal when clicking outside
        >
          <Modal>
            <h2 className="text-[30px] font-bold text-violet-600 mb-4">{t('contact.fail_message')}</h2>
            <p className="text-white-800 text-[18px] leading-[2] mb-4">
              {`${t('contact.fail_message')} ${t('contact.alternative_message')}: `}
              <br></br>
              <a
                href={`mailto:${my_global_info.email}`} // Correct mailto format
                className="text-violet-400 text-[20px] font-bold underline hover:text-violet-500"
                onClick={(e) => e.stopPropagation()} // Prevent modal close but allow navigation
                target="_blank" // Open in new tab (optional, ensures navigation)
                rel="noopener noreferrer" // Security for external links
              >
                  {my_global_info.email}
              </a>
            </p>
            <button
              className="absolute top-10 right-10 text-gray-600 hover:text-gray-900"
              onClick={() => setShowError(false)}
            >
              &#x2715;
            </button>

          </Modal>
        </div>
      )}

    </div>
  )
}

export default SectionWrapper(Contact, 'contact')