import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopComponent } from './home/top/top.component';
import { ActivitiesComponent } from './home/activities/activities.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { ExcerptComponent } from './home/statistics/excerpt/excerpt.component';
import { ActivitiesExcerptComponent } from './home/activities/activities-excerpt/activities-excerpt.component';
import { StatisticsExcerptComponent } from './home/statistics/statistics-excerpt/statistics-excerpt.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopComponent,
    ActivitiesComponent,
    StatisticsComponent,
    ExcerptComponent,
    ActivitiesExcerptComponent,
    StatisticsExcerptComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
