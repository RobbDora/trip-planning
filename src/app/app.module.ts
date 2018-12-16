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

// firebase dependencies
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';
import { TripsListComponent } from './trips-list/trips-list.component';
import { AuthGuard } from './authentication.guard';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './authentication.service';
import { UserService } from './user.service';
import { UserResolver } from './user/user.resolver';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppnavbarComponent,
    TripsListComponent,
    TripPlanningComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
