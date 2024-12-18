import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { github } from "../../assets"
import { fadeIn } from "../../utils/motion"
import { WORKS_PROJECT_CARD_TILT_CLASSES, WORKS_PROJECT_CARD_CLASSES, WORKS_PROJECT_CARD_IMAGE_CLASSES, WORKS_PROJECT_CARD_BUTTON_WRAPPER_CLASSES, WORKS_PROJECT_CARD_BUTTON_CLASSES, WORKS_PROJECT_CARD_BUTTON_IMAGE_CLASSES, WORKS_PROJECT_DATA_WRAPPER_CLASSES, WORKS_PROJECT_DATA_TITLE_CLASSES, WORKS_PROJECT_DATA_DESCRIPTION_CLASSES, WORKS_PROJECT_TAGS_WRAPPER_CLASSES } from "./constants"
import React from "react"
import { useTranslation } from "react-i18next"

const SourceCodeButton = ({ sourceCodeLink }) => (
  <div className={WORKS_PROJECT_CARD_BUTTON_WRAPPER_CLASSES}>
    <div
      className={WORKS_PROJECT_CARD_BUTTON_CLASSES}
      onClick={() => window.open(sourceCodeLink, "_blank")}
    >
      <img
        src={github}
        alt="github"
        className={WORKS_PROJECT_CARD_BUTTON_IMAGE_CLASSES}
      />
    </div>
  </div>
)

const ProjectData = ({ name, description }) => {
  const {t} = useTranslation()
  return (
  <div className={WORKS_PROJECT_DATA_WRAPPER_CLASSES}>
    <h3 className={WORKS_PROJECT_DATA_TITLE_CLASSES}>{name}</h3>
    <p className={WORKS_PROJECT_DATA_DESCRIPTION_CLASSES}>{t(`works.${description}`)}</p>
  </div>
)}

const ProjectTags = ({ tags }) => (
  <div className={WORKS_PROJECT_TAGS_WRAPPER_CLASSES}>
    {tags.map(tag => (
      <p key={tag.name} className={`text-[14px] ${tag.color}`}>
        #{tag.name}
      </p>
    ))}
  </div>
)

const ProjectCard = ({ isMobile = false, index, name, description, tags, image, source_code_link }) => {
  return isMobile ? (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className={WORKS_PROJECT_CARD_TILT_CLASSES}
      >
        <div
          className={WORKS_PROJECT_CARD_CLASSES}
        >
          <img
            src={image}
            alt={name}
            className={WORKS_PROJECT_CARD_IMAGE_CLASSES}
          />

          <SourceCodeButton sourceCodeLink={source_code_link} />
        </div>
        <ProjectData name={name} description={description} />
        <ProjectTags tags={tags} />
      </Tilt>
    </div>
  ) : (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className={WORKS_PROJECT_CARD_TILT_CLASSES}
      >
        <div
          className={WORKS_PROJECT_CARD_CLASSES}
        >
          <img
            src={image}
            alt={name}
            className={WORKS_PROJECT_CARD_IMAGE_CLASSES}
          />

          <SourceCodeButton sourceCodeLink={source_code_link} />
        </div>
        <ProjectData name={name} description={description} />
        <ProjectTags tags={tags} />
      </Tilt>
    </motion.div>

  )
}

export default ProjectCard