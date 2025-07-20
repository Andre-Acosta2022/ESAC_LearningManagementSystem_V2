import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importa las rudesdetas  app.routes.ts
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { AreasComponent } from './areas/areas.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' } // Redirige rutas no encontradas al home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura las rutas con RouterModule
  exports: [RouterModule]  // Exporta RouterModule para que esté disponible en la aplicación
})
export class AppRoutingModule { }
