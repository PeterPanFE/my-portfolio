import React from 'react';
import { cv, linkedin } from '../../assets';
import { STICKY_BUTTONS_BUTTON, STICKY_BUTTONS_GROUP, STICKY_BUTTONS_LABEL, STICKY_BUTTONS_WRAPPER, STICKY_BUTTONS_MOBILE_WRAPPER, STICKY_BUTTONS_MOBILE_GROUP } from './constants';
import { useTranslation } from 'react-i18next';

const StickyButtons: React.FC = () => {
  const { t } = useTranslation();

  const handleDownloadCV = () => {
    const cvUrl = '/cv.pdf'; // Replace with your actual CV file URL
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'PedroOliveira_CV.pdf';
    link.click();
  };

  return (
    <>
      {/* Desktop and larger devices */}
      <div className={`${STICKY_BUTTONS_WRAPPER} hidden md:flex`}>
        {/* CV Button */}
        <button onClick={handleDownloadCV} className={STICKY_BUTTONS_GROUP}>
          <div className={STICKY_BUTTONS_BUTTON}>
            <img src={cv} alt="CV Icon" className="w-20 h-20" />
          </div>
          <span className={STICKY_BUTTONS_LABEL}>
            {t('sticky.download_cv')}
          </span>
        </button>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/pedro-oliveira-883795113"
          target="_blank"
          rel="noopener noreferrer"
          className={STICKY_BUTTONS_GROUP}
        >
          <div className={STICKY_BUTTONS_BUTTON}>
            <img src={linkedin} alt="LinkedIn Icon" className="w-20 h-20" />
          </div>
          <span className={STICKY_BUTTONS_LABEL}>
            {t('sticky.linkedin')}
          </span>
        </a>
      </div>

      {/* Mobile and smaller devices */}
      <div className={`${STICKY_BUTTONS_MOBILE_WRAPPER} flex md:hidden`}>
        {/* CV Button */}
        <button onClick={handleDownloadCV} className={STICKY_BUTTONS_MOBILE_GROUP}>
          <img src={cv} alt="CV Icon" className="w-12 h-12" />
          <span>{t('sticky.download_cv')}</span>
        </button>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/pedro-oliveira-883795113"
          target="_blank"
          rel="noopener noreferrer"
          className={STICKY_BUTTONS_MOBILE_GROUP}
        >
          <img src={linkedin} alt="LinkedIn Icon" className="w-12 h-12" />
          <span>{t('sticky.linkedin')}</span>
        </a>
      </div>
    </>
  );
};

export default StickyButtons;
