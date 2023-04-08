import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './pages/films/films.component';
import { FilmsDetailsComponent } from './pages/films-details/films-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmComponent } from './components/film/film.component';
import { PopularFilmComponent } from './components/popular-film/popular-film.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmsDetailsComponent,
    HeaderComponent,
    FooterComponent,
    FilmComponent,
    PopularFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
