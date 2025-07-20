import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators}from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,ReactiveFormsModule,
    RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // Valores institucionales
  values = [
    {
      icon: 'fas fa-book',
      title: 'Excelencia',
      description: 'Buscar la calidad en la educación y en el desempeño académico, promoviendo el esfuerzo y la dedicación en cada aspecto del aprendizaje y la formación profesional.'
    },
    {
      icon: 'fas fa-pencil-alt',
      title: 'Integridad',
      description: 'Fomentar la honestidad, la transparencia y el comportamiento ético en todas las actividades académicas y profesionales.'
    }
  ];

  // Servicios
  services = [
    {
      icon: 'fas fa-trophy',
      title: 'Calidad Académica',
      description: 'Contamos con profesionales altamente calificados que te guiarán en tu proceso de aprendizaje y desarrollo.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Variedad de Diplomados',
      description: 'Amplia gama de diplomados adaptados a las demandas actuales del mercado laboral.'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Metodología Innovadora',
      description: 'Cursos impartidos con metodologías innovadoras y herramientas tecnológicas de vanguardia.'
    }
  ];

  // Áreas destacadas
  areas = [
    {
      image: 'carrusel1.jpg',
      title: 'Derecho',
      description: 'Amplía tus conocimientos jurídicos con programas en derecho civil, penal, corporativo e internacional.',
      link: '/derecho'
    },
    {
      image: 'carrusel2.jpg',
      title: 'Tecnología',
      description: 'Explora nuestra oferta de programas en tecnología, programación, diseño web y análisis de datos.',
      link: '/tecnologia'
    },
    {
      image: 'carrusel3.jpg',
      title: 'Salud',
      description: 'Programas educativos especializados en áreas críticas del sector salud.',
      link: '/salud'
    }
  ];

  // Departamentos
  departments = [
    'Lima', 'Arequipa', 'Cusco', 'Piura', 'La Libertad', 'Lambayeque', 
    'Junín', 'Puno', 'Ancash', 'Ica', 'Tacna', 'San Martín', 'Huánuco',
    'Amazonas', 'Apurímac', 'Ayacucho', 'Cajamarca', 'Callao', 'Huancavelica',
    'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Tumbes', 'Ucayali'
  ];

  // Formularios
  newsletterForm: FormGroup;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    // Inicialización adicional si es necesaria
  }

  subscribeNewsletter() {
    if (this.newsletterForm.valid) {
      console.log('Suscripción a newsletter:', this.newsletterForm.value);
      // Lógica de suscripción aquí
      this.newsletterForm.reset();
    }
  }

  submitContactForm() {
    if (this.contactForm.valid) {
      console.log('Formulario de contacto:', this.contactForm.value);
      // Lógica de envío aquí
      this.contactForm.reset();
    }
  }
}