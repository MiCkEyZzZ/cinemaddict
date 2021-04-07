const generateFilm = () => {
  const title = `The Dance of Life`
  const original = `The Great Flamarion`
  const poster = `/src/img/the-dance-of-life.jpg`
  const age = `18+`
  const rating = `8.3`
  const description = `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`
  const comments = `5`
  const director = `Anthony Mann`
  const writers = `Anne Wigton, Heinz Herald, Richard Weil`
  const actors = `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`
  const release = `30 March 1945`
  const country = ``
  const year = `1929`
  const runtime = `USA`
  const duration = `1h 55m`
  const genre = `Musical`
  const isWatchlist = true
  const isWatched = true
  const isFavorite = true

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
      runtime,
      country,
      year,
      duration,
      genre,
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