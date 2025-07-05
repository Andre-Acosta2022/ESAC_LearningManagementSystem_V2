import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importa las rudesdetas  app.routes.ts
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { AreasComponent } from './areas/areas.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// Definición de rutas
export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta para el home
  { path: 'about', component: AboutComponent },  // Ruta para "Nosotros"
  { path: 'areas', component: AreasComponent },  // Ruta para "Áreas"
  { path: 'courses', component: CoursesComponent },  // Ruta para "Cursos"
  { path: 'contact', component: ContactComponent },  // Ruta para "Contáctenos"
  { path: 'login', component: LoginComponent }  // Ruta para "Login"
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura las rutas con RouterModule
  exports: [RouterModule]  // Exporta RouterModule para que esté disponible en la aplicación
})
export class AppRoutingModule { }
