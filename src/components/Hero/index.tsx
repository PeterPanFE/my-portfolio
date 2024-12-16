import { motion } from 'framer-motion'
import { my_global_info } from '../../constants'
import { ComputersCanvas } from '../canvas'
import { HERO_CONTENT_CLASSES, HERO_DASH_CLASSES, HERO_HEAD_SPAN_CLASSES, HERO_HEAD_TEXT_CLASSES, HERO_LEFT_CONTENT_CLASSES, HERO_SCROLLDOWN_ANIMATION, HERO_SCROLLDOWN_CONTAINER, HERO_SCROLLDOWN_WRAPPER, HERO_SECTION_CLASSES, HERO_SUB_TEXT_CLASSES, HERO_VERTICAL_LINE_CLASSES } from './constants'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className={HERO_SECTION_CLASSES}>
      <div className={HERO_CONTENT_CLASSES}>
        <div className={HERO_LEFT_CONTENT_CLASSES}>
          <div className={HERO_DASH_CLASSES} />
          <div className={HERO_VERTICAL_LINE_CLASSES} />
        </div>
        <div>
          <h1 className={HERO_HEAD_TEXT_CLASSES}>{t('hero.salutations')}</h1>
          <p className={HERO_SUB_TEXT_CLASSES}>
            {t('hero.description')}
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className={HERO_SCROLLDOWN_CONTAINER}>
        <a href='#about'>
          <div className={HERO_SCROLLDOWN_WRAPPER}>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className={HERO_SCROLLDOWN_ANIMATION}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero