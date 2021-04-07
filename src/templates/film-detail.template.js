const createControlBtnTemplate = (name, labelText, isActive) => {
  return `
    <input 
      type="checkbox" 
      class="film-details__control-input visually-hidden" 
      id="${name}"
      name="${name}"
      ${isActive ? `checked` : ``}
    >
    <label 
      for="${name}" 
      class="film-details__control-label film-details__control-label--${name}"
    >${labelText}</label>
  `
}

const createCommentsTemplate = () => {
  return `
    <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="/src/img/smile.png" width="55" height="55" alt="emoji-smile">
      </span>
      <div>
        <p class="film-details__comment-text">Interesting setting and a good cast</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">Tim Macoveev</span>
          <span class="film-details__comment-day">2019/12/31 23:59</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  `
}

const createCommentEmotionTemplate = () => {
  return `
      <input 
        id="emoji-smile" 
        name="comment-emoji" 
        type="radio" 
        value="smile"
        class="film-details__emoji-item visually-hidden"
      > 
      <label class="film-details__emoji-label" for="emoji-smile">
        <img src="/src/img/smile.png" width="30" height="30" alt="emoji">
      </label>
    `
}

const createSelectEmotionMarkup = () => {
  return `<img src="/src/img/smile.png" width="55" height="55" alt="emoji">`
}

const generateGenreTemplate = (genres) => {
  return Array.from(genres).map(genre => {
    return `<span class="film-details__genre">${genre}</span>`
  })
}

export const createFilmDetailTemplate = (film) => {
  const {
    filmInfo,
    isWatchlist,
    isWatched,
    isFavorite,
    comments
  } = film

  const {
    title,
    original,
    poster,
    age,
    rating,
    description,
    director,
    writers,
    actors,
    release,
    runtime,
    country,
    genres
  } = filmInfo

  const commentItem = comments.map(comment => createCommentsTemplate(comment))
  const commentEmotion = createCommentEmotionTemplate()
  const emotionMarkup = createSelectEmotionMarkup()
  const genresItems = generateGenreTemplate(genres)

  const watchlistClassName = createControlBtnTemplate(`watchlist`, `Add to watchlist`, isWatchlist)
  const watchedClassName = createControlBtnTemplate(`watched`, `Already watched`, isWatched)
  const favoriteClass = createControlBtnTemplate(`favorite`, `Add to favorites`, isFavorite)

  return `
    <section class="film-details">
      <form class="film-details__inner" action="" method="get">
          <div class="form-details__top-container">
            <div class="film-details__close">
              <button class="film-details__close-btn" type="button">close</button>
            </div>
            <div class="film-details__info-wrap">
              <div class="film-details__poster">
                <img class="film-details__poster-img" src="${poster}" alt="${title}">
      
                <p class="film-details__age">${age}</p>
              </div>
      
              <div class="film-details__info">
                <div class="film-details__info-head">
                  <div class="film-details__title-wrap">
                    <h3 class="film-details__title">${title}</h3>
                    <p class="film-details__title-original">Original: ${original}</p>
                  </div>
      
                  <div class="film-details__rating">
                    <p class="film-details__total-rating">${rating}</p>
                  </div>
                </div>
      
                <table class="film-details__table">
                  <tr class="film-details__row">
                    <td class="film-details__term">Director</td>
                    <td class="film-details__cell">${director}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Writers</td>
                    <td class="film-details__cell">${writers}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Actors</td>
                    <td class="film-details__cell">${actors}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Release Date</td>
                    <td class="film-details__cell">${release}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Runtime</td>
                    <td class="film-details__cell">${runtime}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Country</td>
                    <td class="film-details__cell">${country}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Genres</td>
                    <td class="film-details__cell">
                      ${genresItems}
                  </tr>
                </table>
      
                <p class="film-details__film-description">${description}</p>
              </div>
            </div>
      
            <section class="film-details__controls">
              ${watchlistClassName}
              ${watchedClassName}
              ${favoriteClass}
            </section>
          </div>

          <div class="form-details__bottom-container">
            <section class="film-details__comments-wrap">
              <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments}</span></h3>
      
              <ul class="film-details__comments-list">
                ${commentItem}
              </ul>
      
              <div class="film-details__new-comment">
                <div for="add-emoji" class="film-details__add-emoji-label">${emotionMarkup}</div>
      
                <label class="film-details__comment-label">
                  <textarea 
                    name="comment"
                    placeholder="Select reaction below and write comment here" 
                    class="film-details__comment-input" 
                  ></textarea>
                </label>
      
                <div class="film-details__emoji-list">${commentEmotion}</div>
              </div>
            </section>
          </div>
        </form>
    </section>
  `
}