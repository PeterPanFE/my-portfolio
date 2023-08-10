import { motion } from "framer-motion"
import React, { ReactNode } from "react"
import { staggerContainer } from '../utils/motion'
import { SECTION_WRAPPER_CLASSES, TOP_SPACING } from "./constants"

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={SECTION_WRAPPER_CLASSES}
      >
        <span className={TOP_SPACING} id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper