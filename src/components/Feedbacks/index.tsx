import { motion } from 'framer-motion'

import { styles } from '../../styles'
import { SectionWrapper } from '../../hoc'
import { textVariant } from '../../utils/motion'
import { testimonials } from '../../constants'
import { FEDDBACK_CARDS_WRAPPER_CLASSES, FEEDBACKS_CLASSES, FEEDBACKS_WRAPPER_CLASSES } from './constants'
import React from 'react'
import FeedbackCard from './FeedbackCard'
import { useTranslation } from 'react-i18next'

const Feedbacks = () => {
  const {t} = useTranslation()
  return (
    <div
      className={FEEDBACKS_WRAPPER_CLASSES}
    >
      <div
        className={FEEDBACKS_CLASSES}
      >
        <motion.div
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>
            {t('testimonials.sub_text')}
          </p>
          <h2 className={styles.sectionHeadText}>
          {t('testimonials.head_text')}
          </h2>
        </motion.div>
      </div>
      <div className={FEDDBACK_CARDS_WRAPPER_CLASSES}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")