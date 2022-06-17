import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PracticesFormsComponent } from './forms/practices-forms/practices-forms.component';
import { APP_ROUTES } from './app-component.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routes/app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    PracticesFormsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    //RouterModule.forChild(APP_ROUTES),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
