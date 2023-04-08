import { Injectable } from '@angular/core';
import { Film } from './../interfaces/film';
import { movies } from "./data/movie.mock-data";



@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }
  
  getFilms() {
    return movies;
  }
  getPopularFilms() {
    return movies.filter((movie) => movie.rate > 7);
  }
  getFilm(movieId: number) {
    return movies.filter((movie) => movie.id === movieId);
  }
}
