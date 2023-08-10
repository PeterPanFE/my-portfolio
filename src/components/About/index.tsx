import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { about, services } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'
import { styles } from '../../styles'
import { SECTION_SUB_TEXT, SECTION_HEAD_TEXT, SECTION_DESCRIPTION_CLASSES, SECTION_SERVICES_WRAPPER_CLASSES } from './constants'
import ServiceCard from './ServiceCard'
import { SectionWrapper } from '../../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {SECTION_SUB_TEXT}
        </p>
        <h2 className={styles.sectionHeadText}>
          {SECTION_HEAD_TEXT}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={SECTION_DESCRIPTION_CLASSES}
      >
        {about.description}

      </motion.p>

      <div className={SECTION_SERVICES_WRAPPER_CLASSES}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')