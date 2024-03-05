import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks';
import { Blackout } from '../../../../shared/ui/blackout';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import css from './Layout.module.scss';

export const Layout = () => {
  const isOpen = useAppSelector(state => state.burger.isOpen);

  return (
    <>
      <Header />
      <main className={css.main}>
        {isOpen && <Blackout />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
