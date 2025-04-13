import { Component, signal, computed } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CollectionValidators } from '../../models/collection/collection-validators';

@Component({
  selector: 'app-formulario-signals',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-signals.component.html',
  styleUrl: './formulario-signals.component.less'
})
export class FormularioSignalsComponent {
  // Signals para los campos del formulario
  nombre = signal('');
  apellido = signal('');
  email = signal('');
  cedula = signal('');
  fechaNacimiento = signal('');

  // Computed signals para mensajes de error
  errorNombre = computed(() => {
    if (!this.nombre()) return 'El nombre es requerido';
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(this.nombre())) return 'El nombre solo puede contener letras y espacios';
    return '';
  });

  errorApellido = computed(() => {
    if (!this.apellido()) return 'El apellido es requerido';
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(this.apellido())) return 'El apellido solo puede contener letras y espacios';
    return '';
  });

  errorEmail = computed(() => {
    if (!this.email()) return 'El email es requerido';
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(this.email())) return 'Ingrese un email válido';
    return '';
  });

  errorCedula = computed(() => {
    if (!this.cedula()) return 'La cédula es requerida';
    const regex = /^\d{8,10}$/;
    if (!regex.test(this.cedula())) return 'La cédula debe tener entre 8 y 10 dígitos';
    return '';
  });

  errorFechaNacimiento = computed(() => {
    if (!this.fechaNacimiento()) return 'La fecha de nacimiento es requerida';
    const fechaNac = new Date(this.fechaNacimiento());
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    if (edad < 18) return 'Debe ser mayor de 18 años';
    return '';
  });

  // Computed signal para verificar si el formulario está completo y válido
  formularioValido = computed(() => {
    return !this.errorNombre() &&
           !this.errorApellido() &&
           !this.errorEmail() &&
           !this.errorCedula() &&
           !this.errorFechaNacimiento();
  });

  // Método para guardar los datos
  guardar() {
    console.log('Datos del formulario:', {
      nombre: this.nombre(),
      apellido: this.apellido(),
      email: this.email(),
      cedula: this.cedula(),
      fechaNacimiento: this.fechaNacimiento()
    });
  }
}
