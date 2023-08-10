import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { EarthCanvas } from '../canvas'
import { SectionWrapper } from '../../hoc'
import { slideIn } from '../../utils/motion'
import { ALTERNATIVE_SEND_EMAIL_MESSAGE, CONTACT_CONTAINER_CLASSES, CONTACT_CONTAINER_MOTION_CLASSES, CONTACT_FORM_CLASSES, CONTACT_FORM_DEFAULT_VALUES, CONTACT_FORM_FIELD_WRAPPER_CLASSES, CONTACT_FORM_INPUT_CLASSES, CONTACT_FORM_LABELS, CONTACT_FORM_LABEL_CLASSES, CONTACT_HEADTEXT, CONTACT_HEADTEXT_CLASSES, CONTACT_SUBTEXT, CONTACT_SUBTEXT_CLASSES, EARTH_CONTAINER_MOTION_CLASSES, EMAILJS_KEYS, LOADING_BUTTON_LABEL, SEND_BUTTON_CLASSES, SEND_BUTTON_LABEL, SEND_EMAIL_FAIL_MESSAGE, SEND_EMAIL_SUCCESS_MESSAGE } from './constants'
import { my_global_info } from '../../constants'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(CONTACT_FORM_DEFAULT_VALUES)
  const [loading, setLoading] = useState<boolean>(false)
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
        alert(SEND_EMAIL_SUCCESS_MESSAGE)
        setForm(CONTACT_FORM_DEFAULT_VALUES)
      }, (error) => {
        setLoading(false)
        console.error(`${SEND_EMAIL_FAIL_MESSAGE}: ${error}`)
        alert(`${SEND_EMAIL_FAIL_MESSAGE}. ${ALTERNATIVE_SEND_EMAIL_MESSAGE}`)
      })
  }

  return (
    <div className={CONTACT_CONTAINER_CLASSES}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className={CONTACT_CONTAINER_MOTION_CLASSES}
      >
        <p className={CONTACT_SUBTEXT_CLASSES}>{CONTACT_SUBTEXT}</p>
        <h3 className={CONTACT_HEADTEXT_CLASSES}>{CONTACT_HEADTEXT}</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={CONTACT_FORM_CLASSES}
        >
          {Object.keys(CONTACT_FORM_LABELS).map(key => (
            <label className={CONTACT_FORM_FIELD_WRAPPER_CLASSES} key={key}>
              <span className={CONTACT_FORM_LABEL_CLASSES}>{CONTACT_FORM_LABELS[key].label}</span>
              {key === 'message' ? (
                <textarea
                  rows={7}
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  placeholder={CONTACT_FORM_LABELS[key].placeholder}
                  className={CONTACT_FORM_INPUT_CLASSES}
                />
              ) : (
                <input
                  type='text'
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  placeholder={CONTACT_FORM_LABELS[key].placeholder}
                  className={CONTACT_FORM_INPUT_CLASSES}
                />
              )}
            </label>
          ))}
          <button
            type="submit"
            className={SEND_BUTTON_CLASSES}
          >
            {loading ? LOADING_BUTTON_LABEL : SEND_BUTTON_LABEL}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className={EARTH_CONTAINER_MOTION_CLASSES}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')