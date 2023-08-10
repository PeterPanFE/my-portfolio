import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { navLinks } from "../../constants"
import { LANGUAGES, MOBILE_LIST_CLASSES, MOBILE_LIST_ITEM_CLASSES, WEB_LIST_CLASSES, WEB_LIST_ITEM_CLASSES } from "./constants"

interface NavbarItemsProps {
  active: string;
  isMobile?: boolean;
  setActive: (value: string) => void;
  setToggle?: (value: boolean) => void;
}

const NavbarItems = ({ active, isMobile = false, setActive, setToggle }: NavbarItemsProps) => {
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [toggleLanguageSelector, setToggleLanguageSelector] = useState(false)

  return (
    <ul className={isMobile ? MOBILE_LIST_CLASSES : WEB_LIST_CLASSES}>
      {navLinks.map(link =>
        <li
          key={link.id}
          className={`${active === link.title ? 'text-white' : 'text-secondary'} ${isMobile ? MOBILE_LIST_ITEM_CLASSES : WEB_LIST_ITEM_CLASSES}`}
          onClick={() => {
            setToggle && setToggle(false)
            setActive(link.title)
          }}
        >
          <a href={`#${link.id}`}>{t(`navbar.${link.id}`)}</a>
        </li>)}
        <li 
          key="language-selector"
          className={`${isMobile ? MOBILE_LIST_ITEM_CLASSES : WEB_LIST_ITEM_CLASSES} relative`}
          onClick={() => {
            setToggleLanguageSelector(!toggleLanguageSelector)
          }}
        > {t(`languages.${currentLanguage}`)}
            <div className={`${!toggleLanguageSelector ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 min-w-[140px] z-10 rounded-xl`}>
              <ul className={MOBILE_LIST_CLASSES}>
                {LANGUAGES.map(language => (
                  <li
                    key={language}
                    className={`${currentLanguage === language ? 'text-white' : 'text-secondary'} ${MOBILE_LIST_ITEM_CLASSES}`}
                    onClick={() => {
                      setCurrentLanguage(language)
                      changeLanguage(language)
                      setToggleLanguageSelector(false)
                    }}
                  >
                    {t(`languages.${language}`)}
                  </li>  
                ))}
              </ul>
            </div>
        </li>
    </ul>
  )
}

export default NavbarItems