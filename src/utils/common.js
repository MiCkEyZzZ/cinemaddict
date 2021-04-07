import moment from 'moment'
import {HUNDRED_YEARS, MAX_LENGTH_DESCRIPTION} from '../data/const'

export const getRandomIntegerNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomArrayItem = array => {
  const randomIndex = getRandomIntegerNumber(0, array.length -1)

  return array[randomIndex]
}

export const getRandomGenreItems = arr => arr.filter(getRandomBooleanValue).slice(0, getRandomIntegerNumber(1, 5))

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min

export const getRandomRating = () => +getRandomArbitrary(1, 9).toFixed(1)

export const formatYear = date => moment(date).format(`YYYY`)
export const formatDate = date => moment(date).format(`DD MMMM YYYY`)

const getHoursAndMinutes = duration => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60

  return {hours, minutes}
}

export const formatDuration = duration => {
  const {hours, minutes} = getHoursAndMinutes(duration)
  const formattingHours = hours > 0 ? `${hours}h` : ``
  const formattingMinutes = minutes >= 10 ? `${minutes}m` : `0${minutes}m`

  return `${formattingHours} ${formattingMinutes}`
}

export const getRandomReleaseDate = () => {
  const targetDate = new Date()
  const diffYear = getRandomIntegerNumber(0, HUNDRED_YEARS)
  targetDate.setFullYear(targetDate.getFullYear() - diffYear)

  return targetDate.getTime()
}

export const makeShortFilmDescription = description => {
  let shortDescription = description

  if (description.length > MAX_LENGTH_DESCRIPTION) {
    shortDescription = description.slice(0, MAX_LENGTH_DESCRIPTION) + `...`
  }

  return shortDescription
}

export const getRandomBooleanValue = () => Math.random() >= .5

export const getFilmName = title => title.split(` `).map(word => word.toLowerCase()).join(`-`)