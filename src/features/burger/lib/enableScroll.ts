export function disableScroll(): void {
  const scrollbarWidth: number =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.body.classList.add('no-scroll');
}

export function enableScroll(): void {
  document.body.style.paddingRight = '';
  document.body.classList.remove('no-scroll');
}
