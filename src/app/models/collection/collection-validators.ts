import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CollectionValidators {
  // Validador para email
  static email(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email = control.value;
      if (!email) {
        return { required: 'El email es requerido' };
      }
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email) ? null : { email: 'Ingrese un email válido' };
    };
  }

  // Validador para cédula (8-10 dígitos)
  static cedula(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const cedula = control.value;
      if (!cedula) {
        return { required: 'La cédula es requerida' };
      }
      const regex = /^\d{8,10}$/;
      return regex.test(cedula) ? null : { cedula: 'La cédula debe tener entre 8 y 10 dígitos' };
    };
  }

  // Validador para fecha de nacimiento (mayor de 18 años)
  static fechaNacimiento(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fecha = control.value;
      if (!fecha) {
        return { required: 'La fecha de nacimiento es requerida' };
      }
      const fechaNac = new Date(fecha);
      const hoy = new Date();
      const edad = hoy.getFullYear() - fechaNac.getFullYear();
      return edad >= 18 ? null : { edad: 'Debe ser mayor de 18 años' };
    };
  }

  // Validador para nombre (solo letras y espacios)
  static nombre(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const nombre = control.value;
      if (!nombre) {
        return { required: 'El nombre es requerido' };
      }
      const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
      return regex.test(nombre) ? null : { nombre: 'El nombre solo puede contener letras y espacios' };
    };
  }

  // Validador para apellido (solo letras y espacios)
  static apellido(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const apellido = control.value;
      if (!apellido) {
        return { required: 'El apellido es requerido' };
      }
      const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
      return regex.test(apellido) ? null : { apellido: 'El apellido solo puede contener letras y espacios' };
    };
  }

  // Validador para contraseña (mínimo 8 caracteres, una mayúscula, una minúscula y un número)
  static password(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;
      if (!password) {
        return { required: 'La contraseña es requerida' };
      }
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      return regex.test(password) ? null : {
        password: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número'
      };
    };
  }

  // Validador para teléfono (formato internacional)
  static telefono(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const telefono = control.value;
      if (!telefono) {
        return { required: 'El teléfono es requerido' };
      }
      const regex = /^\+?[1-9]\d{1,14}$/;
      return regex.test(telefono) ? null : { telefono: 'Ingrese un número de teléfono válido' };
    };
  }
}
