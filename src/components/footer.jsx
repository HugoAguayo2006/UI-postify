import { NavLink } from "react-router";
import { createElement } from "react";
import { HiHome } from "react-icons/hi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaSearch, FaUser } from "react-icons/fa";

const navItems = [
  { icon: HiHome, label: "Inicio", path: "/home" },
  { icon: MdOutlineVideoLibrary, label: "Reels", path: "/reels" },
  { icon: RiMessengerLine, label: "Mensajes", path: "/mensajes" },
  { icon: FaSearch, label: "Buscar", path: "/buscar" },
  { icon: FaUser, label: "Perfil", path: "/profile/185ebaf9-2785-4b8d-8f90-004b16e54d7f" },
];

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#050a0e]">
      <nav className="mx-auto flex h-14 max-w-md items-center justify-around px-4">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={label}
            to={path}
            aria-label={label}
            className={({ isActive }) =>
              `relative flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/10 active:scale-95 ${
                isActive ? "text-white" : "text-white/80"
              }`
            }
          >
            {createElement(Icon, { className: "h-7 w-7" })}
            {label === "Mensajes" && (
              <span className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-red-500" />
            )}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
