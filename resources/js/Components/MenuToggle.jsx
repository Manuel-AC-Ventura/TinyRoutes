import { FaBars, FaTimes } from "react-icons/fa";


export const MenuToggle = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="flex items-center">
        <button className="block sm:hidden" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
    </div>
  )
}
