import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Añade esto
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AreasComponent } from './areas/areas.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
       AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    AreasComponent,
    CoursesComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
       BrowserModule,
    BrowserAnimationsModule, // Añade esto
    AppRoutingModule,
    CommonModule,
    RouterModule,
    MatButtonModule,    // Añade esto
    MatToolbarModule    // Añade esto
  ],
  providers: [],
  bootstrap: [AppComponent] // Arranca la aplicación con AppComponent
})
export class AppModule { }
