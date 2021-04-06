export const createFilmsListTemplate = (className, title, isHiddenTitle) => {
  return `
    <section class="${className}">
      <h2 class="films-list__title ${isHiddenTitle ? `visually-hidden` : ``}">${title}</h2>
      <div class="films-list__container"></div>
    </section>
  `
}