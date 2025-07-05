import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AreasComponent } from './areas/areas.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

// Definición de rutas
export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta para el home
  { path: 'about', component: AboutComponent },  // Ruta para "Nosotros"
  { path: 'areas', component: AreasComponent },  // Ruta para "Áreas"
  { path: 'courses', component: CoursesComponent },  // Ruta para "Cursos"
  { path: 'contact', component: ContactComponent },  // Ruta para "Contáctenos"
  { path: 'login', component: LoginComponent },  // Ruta para "Login"
];
