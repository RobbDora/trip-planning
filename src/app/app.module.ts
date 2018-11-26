import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

//components
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppnavbarComponent } from './appnavbar/appnavbar.component';
import { TripPlanningComponent } from './trip-planning/trip-planning.component';

//services
import { MovieService } from './movie.service';

// firebase dependencies
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';
import { TripsListComponent } from './trips-list/trips-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppnavbarComponent,
    TripsListComponent,
    TripPlanningComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
