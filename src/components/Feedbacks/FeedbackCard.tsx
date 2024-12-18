import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"
import { FEDDBACK_CARD_CONTENT_FIRST_CLASSES, FEDDBACK_CARD_FOOTER_CLASSES, FEDDBACK_CARD_FOOTER_WRAPPER_CLASSES, FEDDBACK_CARD_SPAN_CLASSES, FEDDBACK_CARD_TESTIMONIAL_CLASSES, FEDDBACK_CARD_TESTIMONIAL_WRITER_CLASSES, FEDDBACK_CARD_TESTIMONIAL_WRITER_DETAILS_CLASSES, FEDDBACK_CARD_TESTIMONIAL_WRITER_IMAGE_CLASSES, FEDDBACK_CARD_WRAPPER_CLASSES } from "./constants"
import React from "react"

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className={FEDDBACK_CARD_WRAPPER_CLASSES}
    >
      <p className={FEDDBACK_CARD_CONTENT_FIRST_CLASSES}>"</p>
      <div>
        <p className={FEDDBACK_CARD_TESTIMONIAL_CLASSES}>{testimonial}</p>
        <div className={FEDDBACK_CARD_FOOTER_WRAPPER_CLASSES}>
          <div className={FEDDBACK_CARD_FOOTER_CLASSES}>
            <p className={FEDDBACK_CARD_TESTIMONIAL_WRITER_CLASSES}>
              <span className={FEDDBACK_CARD_SPAN_CLASSES}>@</span>
              {name}
            </p>
            <p className={FEDDBACK_CARD_TESTIMONIAL_WRITER_DETAILS_CLASSES}>
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className={FEDDBACK_CARD_TESTIMONIAL_WRITER_IMAGE_CLASSES}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default FeedbackCard