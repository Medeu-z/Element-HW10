import { Component, Input } from '@angular/core';
import { Film } from '../../interfaces/film';

@Component({
  selector: 'app-popular-film',
  templateUrl: './popular-film.component.html',
  styleUrls: ['./popular-film.component.scss']
})
export class PopularFilmComponent {
  @Input() film!: Film;
  
}
