import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { fadeIn } from "../../utils/motion"
import { SERVICE_CARD_CLASSES, SERVICE_CARD_ICON_CLASSES, SERVICE_CARD_MOTION_CLASSES, SERVICE_CARD_TITLE_CLASSES, SERVICE_CARD_WRAPPER_CLASSES } from "./constants"
import React from "react"
import { useTranslation } from "react-i18next"

interface ServiceCardProps {
  index: number,
  title: string,
  icon: any
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  const { t } = useTranslation();
  return (
    <Tilt className={SERVICE_CARD_WRAPPER_CLASSES}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={SERVICE_CARD_MOTION_CLASSES}
      >
        <div
          data-options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className={SERVICE_CARD_CLASSES}>
          <img src={icon} alt={title} className={SERVICE_CARD_ICON_CLASSES} />
          <h3 className={SERVICE_CARD_TITLE_CLASSES}>{t(`about.${title}`)}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default ServiceCard