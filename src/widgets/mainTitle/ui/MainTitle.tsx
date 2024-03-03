import css from './MainTitle.module.scss';

export const MainTitle = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.darking}></div>
      <h1 className={css.title}>Smart Planner</h1>
    </div>
  );
};
