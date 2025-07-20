
import { Component,OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Bloquear el scroll del cuerpo cuando el menú está abierto
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Cerrar el menú al cambiar de ruta
  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}