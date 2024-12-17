import { VerticalTimeline } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../../styles'
import { experiences } from '../../constants'
import { SectionWrapper } from '../../hoc'
import { textVariant } from '../../utils/motion'
import { SECTION_HEAD_TEXT, SECTION_SUB_TEXT } from './constants'
import React from 'react'
import ExperienceCard from './ExperienceCard'


const Experience = () => {
  return (
    <>
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
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </>
  )
}

export default SectionWrapper(Experience, 'work')