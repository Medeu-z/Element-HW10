import { Component } from '@angular/core';
import { Film } from '../../interfaces/film';
import { FilmService } from '../../services/film.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  films: Film[] = [];
  popularFilm: Film[] = [];

  constructor(
    private filmService: FilmService,
    private router : Router
  ) {}

  ngOnInit() {
    this.popularFilm = [...this.filmService.getPopularFilms()]
    this.films = [...this.filmService.getFilms()]
  }
  onClickHandler(filmId: number) {
    this.router.navigate(['/film', filmId]);
  }

}
