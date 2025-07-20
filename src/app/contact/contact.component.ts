import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
contactForm: FormGroup;
  departments = [
    'Lima', 'Arequipa', 'Cusco', 'Trujillo', 'Chiclayo', 'Piura', 'Ica', 
    'Tacna', 'Huancayo', 'Puno', 'Ayacucho', 'Cajamarca', 'Huaraz', 'Tarapoto'
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

  submitContactForm() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado', this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}