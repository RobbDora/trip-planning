import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

//components
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppnavbarComponent } from './appnavbar/appnavbar.component';

//services
import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
