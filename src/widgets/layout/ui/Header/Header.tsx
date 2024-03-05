import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { Burger } from '../../../../features/burger';
import { switchOpen } from '../../../../features/burger/model/slice';
import { Modal } from '../../../navModal';
import css from './Header.module.scss';

export const Header = () => {
  const isOpen = useAppSelector(state => state.burger.isOpen);
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !burgerRef.current?.contains(event.target as Node)
      ) {
        dispatch(switchOpen()); // Изменяем состояние isOpen на false
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, dispatch]);

  return (
    <header className={css.header}>
      <NavLink to={'/'} className={css.logo}>
        <div className={css.logo_left}>Smart</div>
        <div className={css.logo_right}>Planner</div>
      </NavLink>
      <Burger ref={burgerRef} />
      {isOpen && <Modal ref={modalRef} children={<div>Hello</div>} />}
    </header>
  );
};
