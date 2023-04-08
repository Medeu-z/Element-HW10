import { Injectable } from '@angular/core';
import { Film } from './../interfaces/film';
import { GenreType } from './data/movie.model';
import { movies } from "./data/movie.mock-data";
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }
  
  getFilms() {
    return movies;
  }
  getFilm(movieId: number) {
    return movies.filter((movie) => movie.id == movieId);
  }
  getPopularFilms() {
    return movies.filter((movie) => movie.rate > 7);
  }
  getSimilarFilms(movieId: number){
    let similarFilm: Film[] = []
    let film = this.getFilm(movieId)
    movies.filter((movie) => {
      if(movie.genres.some( (g: GenreType) => film[0].genres.includes(g))){
        similarFilm = [...similarFilm, movie]
      }
    });
    return similarFilm;
  }
}
