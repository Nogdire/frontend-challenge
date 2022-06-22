import { NavLink } from "react-router-dom";
import "./style.scss";

interface NavBarProps {
  links: { adress: string; name: string }[];
}

export const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <nav className="navigation container">
      {links.map((link, index) => {
        return (
          <NavLink
            to={link.adress}
            end
            key={index}
            className="link navigation__link"
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};
