import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { about, services } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'
import { styles } from '../../styles'
import { SECTION_DESCRIPTION_CLASSES, SECTION_SERVICES_WRAPPER_CLASSES } from './constants'
import ServiceCard from './ServiceCard'
import { SectionWrapper } from '../../hoc'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {t('about.sub_text')}
        </p>
        <h2 className={styles.sectionHeadText}>
          {t('about.head_text')}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={SECTION_DESCRIPTION_CLASSES}
      >
        {t('about.description')}

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