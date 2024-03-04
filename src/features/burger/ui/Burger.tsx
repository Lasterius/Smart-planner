import { useState } from 'react';
import css from './Burger.module.scss';

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSwitch = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div
      className={`${css.wrapper} ${isOpen ? css.open : ''}`}
      onClick={toggleSwitch}
    >
      <div className={css.burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={css.cross}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
