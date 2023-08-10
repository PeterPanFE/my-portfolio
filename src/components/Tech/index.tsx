import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { SECTION_CONTAINER_CLASSES, SECTION_TECH_ELEMENT_CLASS } from './constants';

const Tech = () => {
  return (
    <div className={SECTION_CONTAINER_CLASSES}>
      {technologies.map((tech) => (
        <div className={SECTION_TECH_ELEMENT_CLASS} key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')