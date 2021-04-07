import {
  getFilmName,
  getRandomArrayItem,
  getRandomBooleanValue,
  getRandomGenreItems,
  getRandomIntegerNumber,
  getRandomRating,
  getRandomReleaseDate
} from '../utils/common'
import {
  ACTORS,
  COUNTRIES,
  DESCRIPTIONS,
  DIRECTORS,
  EMOTIONS,
  GENRES,
  POSTERS_PATH,
  TEXT,
  THREE_DAY_IN_MS,
  TITLES,
  USERS,
  WRITERS
} from '../data/const'

const generateCommentText = () => {
  const sentences = TEXT
      .trim()
      .slice(0, 1)
      .split(`. `)
      .map(sentence => `${sentence}.`)

  const sentencesAmount = getRandomIntegerNumber(1, 3)
  const result = []
  for (let i = 0; i < sentencesAmount; i++) {
    result.push(getRandomArrayItem(sentences))
  }

  return result.join(` `)
}

const generateComments = () => {
  return {
    author: getRandomArrayItem(USERS),
    text: generateCommentText(),
    date: getRandomReleaseDate(THREE_DAY_IN_MS),
    emotion: getRandomArrayItem(EMOTIONS)
  }
}

const generateAllComments = () => {
  const commentsAmount = 100
  const allComments = []

  for (let i = 0; i < commentsAmount; i++) {
    const comment = generateComments()
    comment.id = i
    allComments.push(comment)
  }

  return allComments
}

const allComments = generateAllComments()

const reservedComments = []

const generateCommentsForFilm = amount => {
  const comments = []

  for (let i = 0; i < amount; i++) {
    const commentId = getRandomArrayItem(allComments).id

    if (!reservedComments.includes(commentId)) {
      comments.push(commentId)
      reservedComments.push(commentId)
    }
  }

  return comments
}

const generateFilm = () => {
  const age = getRandomIntegerNumber(0, 21)
  const actors = [...new Set(getRandomGenreItems(ACTORS))]
  const commentsAmount = getRandomIntegerNumber(1, 10)
  const comments = generateCommentsForFilm(commentsAmount)
  const description = getRandomArrayItem(DESCRIPTIONS)
  const director = getRandomArrayItem(DIRECTORS)
  const duration = getRandomIntegerNumber(10, 180)
  const genres = [...new Set(getRandomGenreItems(GENRES))]
  const rating = getRandomBooleanValue() ? getRandomRating() : ``
  const release = getRandomReleaseDate()
  const country = getRandomArrayItem(COUNTRIES)
  const title = getRandomArrayItem(TITLES)
  const original = title
  const writers = [...new Set(getRandomGenreItems(WRITERS))]
  const poster = `${POSTERS_PATH}${getFilmName(title)}.jpg`
  const isWatchlist = getRandomBooleanValue()
  const isWatched = getRandomBooleanValue()
  const isFavorite = getRandomBooleanValue()

  return {
    filmInfo: {
      title,
      original,
      age,
      rating,
      director,
      writers,
      actors,
      release,
      country,
      duration,
      genres,
      poster,
      description
    },
    comments,
    isWatchlist,
    isWatched,
    isFavorite
  }
}

export const generateFilms = count => {
  const films = []

  for (let i = 0; i < count; i++) {
    const film = generateFilm()
    film.id = i
    films.push(film)
  }

  return films
}