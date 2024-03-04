import { NavLink } from 'react-router-dom';
import { Burger } from '../../../../features/burger';
import css from './Header.module.scss';

export const Header = () => {
  return (
    <header className={css.header}>
      <NavLink to={'/'} className={css.logo}>
        <div className={css.logo_left}>Smart</div>
        <div className={css.logo_right}>Planner</div>
      </NavLink>
      <Burger />
    </header>
  );
};
