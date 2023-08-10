import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { EXPERIENCE_CARD_TITLE_CLASSES, EXPERIENCE_ICON_CLASSES, EXPERIENCE_ICON_WRAPPER_CLASSES, EXPERIENCE_CARD_SUB_TITLE_CLASSES, EXPERIENCE_CARD_POINTS_CLASSES, EXPERIENCE_CARD_POINT_CLASSES } from './constants'
import { contentStyle, contentArrowStyle, subTitleStyle } from './styles'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={experience.date}
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
        <h3 className={EXPERIENCE_CARD_TITLE_CLASSES}>{experience.title}</h3>
        <p className={EXPERIENCE_CARD_SUB_TITLE_CLASSES} style={subTitleStyle}>{experience.company_name}</p>
      </div>

      <ul className={EXPERIENCE_CARD_POINTS_CLASSES}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={EXPERIENCE_CARD_POINT_CLASSES}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}


export default ExperienceCard