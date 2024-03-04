import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import css from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
