import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from '../app/pages/films/films.component';
import { FilmsDetailsComponent } from '../app/pages/films-details/films-details.component';

const routes: Routes = [
  {
    path:'films', component: FilmsComponent
  },
  {
    path:'film/:id', component: FilmsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
