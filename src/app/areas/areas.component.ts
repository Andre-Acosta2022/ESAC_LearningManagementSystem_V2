import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  imports: [CommonModule],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent {
  specialties = [
    { name: 'Gestión', icon: 'fa-chart-line' },
    { name: 'Derecho', icon: 'fa-gavel' },
    { name: 'Pedagogía', icon: 'fa-book' },
    { name: 'Marketing', icon: 'fa-bullhorn' },
    { name: 'Auditoría', icon: 'fa-file-invoice' },
    { name: 'Informática', icon: 'fa-laptop-code' },
    { name: 'Salud', icon: 'fa-heartbeat' }
  ];

  services = [
    { 
      title: 'Modalidad Virtual', 
      description: 'Estudiar y certificarse de manera virtual en diplomados de gestión pública ofrece una serie de ventajas significativas...',
      icon: 'fa-laptop'
    },
    { 
      title: 'Diplomados en dos meses', 
      description: 'La flexibilidad de realizar un diplomado en dos meses permite a los participantes incorporar esta formación...',
      icon: 'fa-calendar-alt'
    },
    { 
      title: '240 horas académicas acreditadas', 
      description: 'La acreditación de 240 horas brinda una certificación reconocida que puede respaldar oportunidades laborales...',
      icon: 'fa-clock'
    },
    { 
      title: 'Diplomados con código QR', 
      description: 'Los diplomados con código QR ofrecen una forma innovadora y eficiente de obtener certificaciones reconocidas...',
      icon: 'fa-qrcode'
    }
  ];

  selectedSpecialty: string | null = null;

  selectSpecialty(specialty: string) {
    this.selectedSpecialty = specialty;
    // Aquí puedes añadir lógica adicional cuando se selecciona una especialidad
    console.log(`Especialidad seleccionada: ${specialty}`);
  }
}