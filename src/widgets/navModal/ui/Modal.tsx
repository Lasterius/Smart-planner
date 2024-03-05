import React from 'react';
import { Props } from '../model/types';
import css from './Modal.module.scss';

export const Modal = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div ref={ref} className={css.wrapper}>
      {props.children}
    </div>
  );
});
