import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { EXPERIENCE_CARD_TITLE_CLASSES, EXPERIENCE_ICON_CLASSES, EXPERIENCE_ICON_WRAPPER_CLASSES, EXPERIENCE_CARD_SUB_TITLE_CLASSES, EXPERIENCE_CARD_POINTS_CLASSES, EXPERIENCE_CARD_POINT_CLASSES, EXPERIENCE_CARD_2TITLE_CLASSES } from './constants'
import { contentStyle, contentArrowStyle, subTitleStyle } from './styles'
import { useTranslation } from 'react-i18next'

const ExperienceCard = ({ experience }) => {
  const {t} = useTranslation()
  const tasksArray = t(`about.${experience.tasks}`).split("; ")
  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={t(`about.${experience.date}`)}
      iconStyle={{
        background: experience.iconBg
      }}
      icon={
        <div className={EXPERIENCE_ICON_WRAPPER_CLASSES}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={EXPERIENCE_ICON_CLASSES}
          />
        </div>
      }
    >
      <div>
        <h3 className={EXPERIENCE_CARD_TITLE_CLASSES}>{t(`about.${experience.title}`)}</h3>
        <h5 className={EXPERIENCE_CARD_2TITLE_CLASSES} style={subTitleStyle}>{t(`about.${experience.company_name}`)}</h5>
        <p className={EXPERIENCE_CARD_SUB_TITLE_CLASSES} style={subTitleStyle}>{t(`about.${experience.location}`)}</p>
      </div>

      <ul className={EXPERIENCE_CARD_POINTS_CLASSES}>
        {tasksArray.map((task, index) => (
          <li
            key={`experience-point-${index}`}
            className={EXPERIENCE_CARD_POINT_CLASSES}
          >
            {task}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}


export default ExperienceCard