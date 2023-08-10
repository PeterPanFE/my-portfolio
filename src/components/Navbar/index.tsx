import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { logo, menu, close } from '../../assets'
import NavbarItems from './NavbarItems'
import { MY_JOB, NAVBAR_CONTAINER_CLASSES, NAVBAR_HAMBURGUER_MENU_BUTTON_CLASSES, NAVBAR_HAMBURGUER_MENU_CLASSES, NAVBAR_HAMBURGUER_MENU_WRAPPER_CLASSES, NAVBAR_HEADER_CLASSES, NAVBAR_HEADER_SPAN_CLASSES, NAVBAR_LOGO_IMAGE_CLASSES, NAVBAR_LOGO_LINK_CLASSES, NAVBAR_WRAPPER_CLASSES } from './constants'
import { my_global_info } from '../../constants'


const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav
      className={NAVBAR_CONTAINER_CLASSES}
    >
      <div className={NAVBAR_WRAPPER_CLASSES}>
        <Link
          to="/"
          className={NAVBAR_LOGO_LINK_CLASSES}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className={NAVBAR_LOGO_IMAGE_CLASSES} />
          <p className={NAVBAR_HEADER_CLASSES}>{my_global_info.name} &nbsp;<span className={NAVBAR_HEADER_SPAN_CLASSES}>{MY_JOB}</span></p>
        </Link>
        <NavbarItems active={active} setActive={setActive} />
        <div className={NAVBAR_HAMBURGUER_MENU_CLASSES}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={NAVBAR_HAMBURGUER_MENU_BUTTON_CLASSES}
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} ${NAVBAR_HAMBURGUER_MENU_WRAPPER_CLASSES}`}>
            <NavbarItems
              active={active}
              isMobile={true}
              setActive={setActive}
              setToggle={setToggle}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar