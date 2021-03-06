import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddShowComponent } from './add-show/add-show.component';
import { AddTheatreComponent } from './add-theatre/add-theatre.component';
import { AuthGuard } from './auth/auth.guard';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { HomeComponent } from './home/home.component';
import { ShowCitiesComponent } from './show-cities/show-cities.component';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { TicketHistoryComponent } from './ticket-history/ticket-history.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'showcities', component: ShowCitiesComponent },
      { path: 'city/:city', component: ShowMoviesComponent },
      { path: 'addMovie', component: AddMovieComponent, data: {permittedRoles: ['Admin']} },
      { path: 'addTheatre', component: AddTheatreComponent, data: { permittedRoles: ['Admin'] } },
      { path: 'addShow', component: AddShowComponent, data: { permittedRoles: ['Admin'] } },
      { path: 'booktickets/:showId', component: BookTicketsComponent },
      { path: 'viewTicket', component: ViewTicketComponent },
      { path: 'ticketHistory', component: TicketHistoryComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
