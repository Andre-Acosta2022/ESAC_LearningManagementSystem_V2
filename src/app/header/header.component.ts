
import { Component,OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.scrollY; // Detecta el desplazamiento hacia abajo de la página
    const header = document.getElementById('second-container'); // Encuentra el contenedor donde deseas cambiar el fondo
    
    if (scrollPosition > 50) {  // Cambiar cuando el scroll sea mayor que 50px
      header?.classList.add('scrolled'); // Se agrega la clase cuando se hace scroll
    } else {
      header?.classList.remove('scrolled'); // Se elimina la clase cuando no hay scroll
    }
  }
}