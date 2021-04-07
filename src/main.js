import '@/css/main.css'
import '@/scss/main.scss'

import {HeaderComponent} from './components/header.component'
import {FilmsComponent} from './components/films.component'
import {FilmsListComponent} from './components/films-list.component'
import {FilmCardComponent} from './components/film-card.component'
import {FooterComponent} from './components/footer.component'
import {LoadMoreComponent} from './components/loadmore.component'
import {NavigationComponent} from './components/navigation.component'
import {SortComponent} from './components/sort.component'

import {remove, render, RenderPosition} from './utils/renders'
import {generateFilms} from './mocks/films'

const FILM_COUNT = 35
const FILM_COUNT_EXTRA = 2
const SHOWING_FILM_COUNT_ON_START = 5
const SHOWING_FILM_COUNT_BY_BUTTON = 5

const siteHeaderElement = document.querySelector(`.header`)
const siteMainElement = document.querySelector(`.main`)
const siteFooterElement = document.querySelector(`.footer`)

const films = generateFilms(FILM_COUNT)

const headerComponent = new HeaderComponent()
render(siteHeaderElement, headerComponent, RenderPosition.BEFOREEND)

const footerComponent = new FooterComponent()
render(siteFooterElement, footerComponent, RenderPosition.BEFOREEND)

const navigateComponent = new NavigationComponent()
render(siteMainElement, navigateComponent, RenderPosition.BEFOREEND)

const sortComponent = new SortComponent()
render(siteMainElement, sortComponent, RenderPosition.BEFOREEND)

const filmsComponent = new FilmsComponent()
render(siteMainElement, filmsComponent, RenderPosition.BEFOREEND)

const siteFilms = siteMainElement.querySelector('.films')
const filmsListComponentAll = new FilmsListComponent(`films-list`, `All movies. Upcoming`, true)
render(siteFilms, filmsListComponentAll, RenderPosition.BEFOREEND)

const siteFilmContainer = siteFilms.querySelector('.films-list .films-list__container')

let showingFilmsCount = SHOWING_FILM_COUNT_ON_START

films.slice(0, showingFilmsCount)
    .forEach(film => render(siteFilmContainer, new FilmCardComponent(film), RenderPosition.BEFOREEND))

const siteFilmsList = siteFilms.querySelector('.films-list')
const loadMoreButton = new LoadMoreComponent()
render(siteFilmsList, loadMoreButton, RenderPosition.BEFOREEND)

loadMoreButton.setHandleClick(() => {
  const prevFilmsCount = showingFilmsCount
  showingFilmsCount = showingFilmsCount + SHOWING_FILM_COUNT_BY_BUTTON

  films.slice(prevFilmsCount, showingFilmsCount)
      .forEach(film => render(siteFilmContainer, new FilmCardComponent(film), RenderPosition.BEFOREEND))

  if (showingFilmsCount >= films.length) {
    remove(loadMoreButton)
  }
})

const filmsListComponentTop = new FilmsListComponent(`films-list--extra`, `Most commented`, false)
const filmsListComponentMost = new FilmsListComponent(`films-list--extra`, `Top rated`, false)
render(siteFilms, filmsListComponentTop, RenderPosition.BEFOREEND)
render(siteFilms, filmsListComponentMost, RenderPosition.BEFOREEND)

const siteFilmContainerElement = siteFilms.querySelectorAll(`.films-list--extra .films-list__container`)

films.slice(0, FILM_COUNT_EXTRA)
    .forEach(film => render(siteFilmContainerElement[0], new FilmCardComponent(film), RenderPosition.BEFOREEND))

films.slice(0, FILM_COUNT_EXTRA)
    .forEach(film => render(siteFilmContainerElement[1], new FilmCardComponent(film), RenderPosition.BEFOREEND))