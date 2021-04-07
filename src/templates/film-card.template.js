const createControlBtn = (name, labelName, isActive) => {
  return `
    <button 
      class="film-card__controls-item button film-card__controls-item--${name} ${isActive ? `film-card__controls-item--active` : ``}"
    >${labelName}</button>
  `
}

export const createFilmCardTemplate = (film) => {
  const {
    filmInfo,
    isWatchlist,
    isWatched,
    isFavorite,
    comments
  } = film

  const {
    title,
    rating,
    year,
    duration,
    genre,
    poster,
    description
  } = filmInfo

  const watchlistClassName = createControlBtn(`add-to-watchlist`, `Add to watchlist`, isWatchlist)
  const watchedClassName = createControlBtn(`mark-as-watched`, `Mark as watched`, isWatched)
  const favoriteClassName = createControlBtn(`favorite`, `Mark as favorite`, isFavorite)

  return `
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${comments} comments</a>
      <form class="film-card__controls">
        ${watchlistClassName}
        ${watchedClassName}
        ${favoriteClassName}
      </form>
    </article>
  `
}