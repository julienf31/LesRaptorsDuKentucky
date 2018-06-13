import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopComponent } from './home/top/top.component';
import { ActivitiesComponent } from './home/activities/activities.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { ActivitiesExcerptComponent } from './home/activities/activities-excerpt/activities-excerpt.component';
import { StatisticsExcerptComponent } from './home/statistics/statistics-excerpt/statistics-excerpt.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { ProfilComponent } from './profil/profil/profil.component';
import { LoginComponent } from './login/login/login.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopComponent,
    ActivitiesComponent,
    StatisticsComponent,
    ActivitiesExcerptComponent,
    StatisticsExcerptComponent,
    FooterComponent,
    HomeComponent,
    ProfilComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
