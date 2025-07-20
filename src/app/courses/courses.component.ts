import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

 categories = [
    'Auditoría', 'Derecho', 'Gestión', 'Informática', 
    'Marketing', 'Otros', 'Pedagogía', 'Recursos Humanos', 'Salud'
  ];
  
  selectedCategory: string | null = null;
  
  courses = [
    { 
      id: 1, 
      name: 'Promoción de 3 x 1', 
      category: 'Gestión', 
      oldPrice: 99.00, 
      price: 50.00, 
      image: 'carrusel1.jpg',
      rating: 4.8,
      students: 124,
      duration: '8 semanas'
    },
    { 
      id: 2, 
      name: 'Gestión Pública', 
      category: 'Gestión', 
      oldPrice: 99.00, 
      price: 50.00, 
      image: 'carrusel01.jpg',
      rating: 4.5,
      students: 89,
      duration: '6 semanas'
    },
    { 
      id: 3, 
      name: 'Derecho Administrativo', 
      category: 'Derecho', 
      oldPrice: 99.00, 
      price: 50.00, 
      image: 'carrusel2.jpg',
      rating: 4.7,
      students: 102,
      duration: '10 semanas'
    },
    { 
      id: 4, 
      name: 'Marketing Digital', 
      category: 'Marketing', 
      oldPrice: 99.00, 
      price: 50.00, 
      image: 'carrusel3.jpg',
      rating: 4.9,
      students: 156,
      duration: '8 semanas'
    },
    { 
      id: 5, 
      name: 'Auditoría de Sistemas', 
      category: 'Auditoría', 
      oldPrice: 99.00, 
      price: 50.00, 
      image: 'carrusel01.jpg',
      rating: 4.6,
      students: 78,
      duration: '12 semanas'
    },
    { 
      id: 6, 
      name: 'Pedagogía Moderna', 
      category: 'Pedagogía', 
      oldPrice: 99.00, 
      price: 50.00, 
      image: 'carrusel1.jpg',
      rating: 4.8,
      students: 135,
      duration: '8 semanas'
    }
  ];
  
  filteredCourses = this.courses;
  
  selectCategory(category: string | null) {
    this.selectedCategory = category;
    if (category) {
      this.filteredCourses = this.courses.filter(c => c.category === category);
    } else {
      this.filteredCourses = this.courses;
    }
  }
  
  addToCart(course: any) {
    console.log('Curso añadido:', course);
    // Aquí iría la lógica para añadir al carrito
    alert(`"${course.name}" añadido al carrito`);
  }
}