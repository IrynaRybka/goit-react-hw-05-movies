import { BiHome, BiMoviePlay } from 'react-icons/bi';
import { NavItem } from './AppBar.styled';
import css from "./AppBar.module.css";

const navItems = [
  { href: '/', text: 'Home', icon: BiHome },
  { href: 'movies', text: 'Movies', icon: BiMoviePlay },
];

export const Appbar = () => {
  return (
    <div className={css.AppBar}>
      {navItems.map(({ href, text, icon: Icon }) => (
        <NavItem to={href} key={href}>
            <Icon size="18"/>
          {text}
        </NavItem>
      ))}
    </div>
  );
};
