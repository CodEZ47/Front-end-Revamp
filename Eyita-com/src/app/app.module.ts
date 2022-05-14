import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndividualMovieComponent } from './individual-movie/individual-movie.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HomePageComponent,
    IndividualMovieComponent,
    LoginPageComponent,
    ForgotPasswordComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
