import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <NavLink to={'/'} className={css.logo}>
          <div className={css.logo_left}>Smart</div>
          <div className={css.logo_right}>Planner</div>
        </NavLink>
        <div>Nav</div>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}>
        <div className={css.footer_wrapper}>
          <div>All rights reserved</div>
          <div>LinkedIn</div>
        </div>
      </footer>
    </>
  );
};
