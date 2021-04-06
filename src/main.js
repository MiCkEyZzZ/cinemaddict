import '@/css/main.css'
import '@/scss/main.scss'

import {createHeaderTemplate} from './templates/header.template'
import {createFooterTemplate} from './templates/footer.template'
import {createNavigationTemplate} from './templates/navigation.template'
import {createSortTemplate} from './templates/sort.template'
import {createFilmsTemplate} from './templates/films.template'
import {createFilmsListTemplate} from './templates/films-list.template'
import {createFilmCardTemplate} from './templates/film-card.template'
import {createLoadMoreTemplate} from './templates/loadmore.template'

import {render} from './utils/renders'

const FILM_COUNT = 5
const FILM_COUNT_EXTRA = 2

const siteHeaderElement = document.querySelector(`.header`)
const siteMainElement = document.querySelector(`.main`)
const siteFooterElement = document.querySelector(`.footer`)

render(siteHeaderElement, createHeaderTemplate())
render(siteMainElement, createNavigationTemplate())
render(siteMainElement, createSortTemplate())
render(siteMainElement, createFilmsTemplate())

const siteFilms = siteMainElement.querySelector('.films')
render(siteFilms, createFilmsListTemplate(`films-list`, `All movies. Upcoming`, true))

const siteFilmContainer = siteFilms.querySelector('.films-list .films-list__container')
for (let i = 0; i < FILM_COUNT; i++) {
  render(siteFilmContainer, createFilmCardTemplate())
}

const siteFilmsList = siteFilms.querySelector('.films-list')
render(siteFilmsList, createLoadMoreTemplate())

render(siteFilms, createFilmsListTemplate(`films-list--extra`, `Most commented`, false))
render(siteFilms, createFilmsListTemplate(`films-list--extra`, `Top rated`, false))

const siteFilmContainerElement = siteFilms.querySelectorAll(`.films-list--extra .films-list__container`)

for (let i = 0; i < FILM_COUNT_EXTRA; i++) {
  render(siteFilmContainerElement[0], createFilmCardTemplate())
  render(siteFilmContainerElement[1], createFilmCardTemplate())
}

render(siteFooterElement, createFooterTemplate())