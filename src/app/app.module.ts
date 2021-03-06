import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { ShowCitiesComponent } from './show-cities/show-cities.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddTheatreComponent } from './add-theatre/add-theatre.component';
import { AddShowComponent } from './add-show/add-show.component';
import { TicketHistoryComponent } from './ticket-history/ticket-history.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    BookTicketsComponent,
    ShowMoviesComponent,
    ShowCitiesComponent,
    ViewTicketComponent,
    AddMovieComponent,
    AddTheatreComponent,
    AddShowComponent,
    TicketHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalService, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
