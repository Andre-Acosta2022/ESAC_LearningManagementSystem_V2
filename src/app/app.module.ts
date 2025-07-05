import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';  // Importar mat-button
import { MatToolbarModule } from '@angular/material/toolbar';  // Importar mat-toolbar
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,   // Incluir mat-button
    MatToolbarModule,  // Incluir mat-toolbar
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [] // Arranca la aplicación con AppComponent
})
export class AppModule { }
