import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from '../../styles'
import { github } from '../../assets'
import { SectionWrapper } from '../../hoc'
import { projects, works } from '../../constants'
import { fadeIn, textVariant } from "../../utils/motion"
import { SECTION_SUB_TEXT, SECTION_HEAD_TEXT, WORKS_CONTENT_WRAPPER_CLASSES, WORKS_CONTENT_MOTION_CLASSES, WORKS_PROJECT_CARDS_WRAPPER_CLASSES } from "./constants"

import ProjectCard from "./ProjectCard"

const Works = () => {
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
      <div className={WORKS_CONTENT_WRAPPER_CLASSES}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={WORKS_CONTENT_MOTION_CLASSES}
        >
          {works.description}
        </motion.p>
      </div>
      <div className={WORKS_PROJECT_CARDS_WRAPPER_CLASSES}>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")