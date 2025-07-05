import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators}from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  contactForm!: FormGroup; // Usamos "!" para indicar que será inicializada más tarde

  departments = [
    'Amazonas', 'Ancash', 'Apurimac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 
    'Cusco', 'Huancavelica', 'Huanuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 
    'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 
    'Tacna', 'Tumbes', 'Ucayali'
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicializamos el formulario en ngOnInit
    this.contactForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulario enviado', this.contactForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
