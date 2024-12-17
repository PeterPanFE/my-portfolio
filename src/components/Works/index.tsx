import { motion } from "framer-motion"

import { styles } from '../../styles'
import { SectionWrapper } from '../../hoc'
import { projects, works } from '../../constants'
import { fadeIn, textVariant } from "../../utils/motion"
import { WORKS_CONTENT_WRAPPER_CLASSES, WORKS_CONTENT_MOTION_CLASSES, WORKS_PROJECT_CARDS_WRAPPER_CLASSES } from "./constants"

import ProjectCard from "./ProjectCard"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const Works = () => {
  const {t} = useTranslation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust 768 based on your needs
    };

    // Check on mount
    checkIfMobile();

    // Add resize event listener to check when the window is resized
    window.addEventListener('resize', checkIfMobile);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <>
      {isMobile ? 
        <div>
          <p className={styles.sectionSubText}>
            {t("works.sub_text")}
          </p>
          <h2 className={styles.sectionHeadText}>
          {t("works.head_text")}
          </h2>
        </div>
      :
        <motion.div
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>
            {t("works.sub_text")}
          </p>
          <h2 className={styles.sectionHeadText}>
          {t("works.head_text")}
          </h2>
        </motion.div>
      }
      <div className={WORKS_CONTENT_WRAPPER_CLASSES}>
        {isMobile ? 
          <p
            className={WORKS_CONTENT_MOTION_CLASSES}
          >
            {t(`works.${works.description}`).split('\n\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>
        :
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={WORKS_CONTENT_MOTION_CLASSES}
          >
            {t(`works.${works.description}`).split('\n\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </motion.p>
        
        }
      </div>
      <div className={WORKS_PROJECT_CARDS_WRAPPER_CLASSES}>
        {projects.map((project, index) => (
          <ProjectCard
            isMobile
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