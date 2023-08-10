import { navLinks } from "../../constants"
import { MOBILE_LIST_CLASSES, MOBILE_LIST_ITEM_CLASSES, WEB_LIST_CLASSES, WEB_LIST_ITEM_CLASSES } from "./constants"

interface NavbarItemsProps {
  active: string;
  isMobile?: boolean;
  setActive: (value: string) => void;
  setToggle?: (value: boolean) => void;
}

const NavbarItems = ({ active, isMobile = false, setActive, setToggle }: NavbarItemsProps) => {
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
          <a href={`#${link.id}`}>{link.title}</a>
        </li>)}
    </ul>
  )
}

export default NavbarItems