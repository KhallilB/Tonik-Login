//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { NavbarLoggedInComponent } from './nav/navbar-logged-in/navbar-logged-in.component';

//Routes
const appRoutes: Routes = [
  { path: '', component: LandingComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    NavbarLoggedInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
