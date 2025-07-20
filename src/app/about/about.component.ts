import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  contactForm: FormGroup;
  departments = [
    'Amazonas', 'Ancash', 'Apurimac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 
    'Cusco', 'Huancavelica', 'Huanuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 
    'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 
    'Tacna', 'Tumbes', 'Ucayali'
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]],
      message: [''],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  ngOnInit(): void {
    // Inicialización adicional si es necesaria
  }

  submitContactForm() {
    if (this.contactForm.valid) {
      console.log('Formulario de contacto enviado', this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario
      this.contactForm.reset();
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      this.contactForm.markAllAsTouched();
    }
  }
}