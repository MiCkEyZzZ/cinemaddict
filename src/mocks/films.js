const generateFilm = () => {
  const title = `The Dance of Life`
  const rating = `8.3`
  const year = `1929`
  const duration = `1h 55m`
  const genre = `Musical`
  const poster = `/src/img/the-dance-of-life.jpg`
  const description = `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`
  const comments = `5`

  return {
    filmInfo: {
      title,
      rating,
      year,
      duration,
      genre,
      poster,
      description,
      comments
    }
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