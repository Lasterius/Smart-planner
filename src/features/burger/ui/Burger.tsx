import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { disableScroll, enableScroll } from '../lib/enableScroll';
import { switchOpen } from '../model/slice';
import css from './Burger.module.scss';

export const Burger = React.forwardRef<HTMLDivElement>((props, ref) => {
  const isOpen = useAppSelector(state => state.burger.isOpen);
  const dispatch = useAppDispatch();

  const toggleSwitch = () => dispatch(switchOpen());

  isOpen ? disableScroll() : enableScroll();

  return (
    <div
      ref={ref}
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
});
