import { NavLink } from "react-router";
import { createElement } from "react";
import { HiHome } from "react-icons/hi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FaSearch, FaUser } from "react-icons/fa";

const navItems = [
  { icon: HiHome, label: "Inicio", path: "/home" },
  { icon: FaSearch, label: "Buscar", path: "/buscar" },
  { icon: MdOutlineVideoLibrary, label: "Reels", path: "/reels" },
  { icon: TiMessages, label: "Mensajes", path: "/mensajes" },
  { icon: FaUser, label: "Perfil", path: "/profile/185ebaf9-2785-4b8d-8f90-004b16e54d7f" },
];

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white">
      <nav className="mx-auto flex h-14 max-w-md items-center justify-around px-4">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={label}
            to={path}
            aria-label={label}
            className={({ isActive }) =>
              `flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-gray-100 active:scale-95 ${
                isActive ? "text-black" : "text-neutral-700"
              }`
            }
          >
            {createElement(Icon, { className: "h-7 w-7" })}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
