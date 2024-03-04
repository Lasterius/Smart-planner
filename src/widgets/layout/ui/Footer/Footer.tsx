import css from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer_wrapper}>
        <div>All rights reserved</div>
        <div>LinkedIn</div>
      </div>
    </footer>
  );
};
