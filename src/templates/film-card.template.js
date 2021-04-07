import {formatDuration, formatYear, makeShortFilmDescription} from '../utils/common'

const createControlBtnTemplate = (name, labelName, isActive) => {
  return `
    <button 
      class="film-card__controls-item button film-card__controls-item--${name} ${isActive ? `film-card__controls-item--active` : ``}"
    >${labelName}</button>
  `
}

const createCommentsCountTemplate = comments => {
  switch (comments.length) {
    case 0:
      return `no comments yet`
    case 1:
      return `1 comment`
    default:
      return `${comments.length} comments`
  }
}

export const createFilmCardTemplate = film => {
  const {
    comments,
    filmInfo,
    isWatchlist,
    isWatched,
    isFavorite
  } = film

  const {
    description,
    duration,
    genres,
    poster,
    rating,
    release,
    title
  } = filmInfo

  const watchlistClassName = createControlBtnTemplate(`add-to-watchlist`, `Add to watchlist`, isWatchlist)
  const watchedClassName = createControlBtnTemplate(`mark-as-watched`, `Mark as watched`, isWatched)
  const favoriteClassName = createControlBtnTemplate(`favorite`, `Mark as favorite`, isFavorite)
  const shortFilmDescription = makeShortFilmDescription(description)
  const year = formatYear(release)
  const runtime = formatDuration(duration)
  const commentsCount = createCommentsCountTemplate(comments)

  return `
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${runtime}</span>
        <span class="film-card__genre">${Array.from(genres)[0]}</span>
      </p>
      <img src="${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${shortFilmDescription}</p>
      <a class="film-card__comments">${commentsCount}</a>
      <form class="film-card__controls">
        ${watchlistClassName}
        ${watchedClassName}
        ${favoriteClassName}
      </form>
    </article>
  `
}