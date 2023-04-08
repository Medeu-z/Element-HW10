import { Component, Input } from '@angular/core';
import { Film } from '../../interfaces/film';
import { FilmService } from '../../services/film.service';
import { Router,  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent {
  @Input() film!: Film;
  similarFilm: Film[] = [];

  constructor(
    private router : Router,  
    private route: ActivatedRoute,
    private filmService: FilmService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.filmService.getFilm(id).map((i) => (this.film = i));
    this.similarFilm = [... this.filmService.getSimilarFilms(id)]
  }
  onClickHandler() {
    this.router.navigate(['/films']);
  }
  onClickFilm(filmId: number) {
    this.similarFilm = [];
    this.filmService.getFilm(filmId).map((i) => (this.film = i));
    this.similarFilm = [... this.filmService.getSimilarFilms(filmId)]
    this.router.navigate(['/film', filmId]);
    
  }
}
