import { motion } from 'framer-motion'

import { styles } from '../../styles'
import { SectionWrapper } from '../../hoc'
import { fadeIn, textVariant } from '../../utils/motion'
import { testimonials } from '../../constants'
import { FEDDBACK_CARDS_WRAPPER_CLASSES, FEEDBACKS_CLASSES, FEEDBACKS_WRAPPER_CLASSES, SECTION_HEAD_TEXT, SECTION_SUB_TEXT } from './constants'
import React from 'react'
import FeedbackCard from './FeedbackCard'

const Feedbacks = () => {
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
            {SECTION_SUB_TEXT}
          </p>
          <h2 className={styles.sectionHeadText}>
            {SECTION_HEAD_TEXT}
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