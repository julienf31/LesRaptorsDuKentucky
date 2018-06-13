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
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireStorageModule} from 'angularfire2/storage';

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
