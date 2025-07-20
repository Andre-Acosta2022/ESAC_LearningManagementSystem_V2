
import { Component,OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;

    constructor(private router: Router) { }

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
    navigateTo(path: string, event: Event) {
    event.preventDefault();
    this.closeMenu();
    this.router.navigate([path]);
  }
}
