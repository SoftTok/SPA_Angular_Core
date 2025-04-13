import { AngularLibraryGrupo1Module } from 'node_modules/angular-library-grupo1/src/lib/angular-library-grupo1.module';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioSignalsComponent } from './components/formulario-signals/formulario-signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormularioSignalsComponent,AngularLibraryGrupo1Module],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'CashflowGuardCore';

  headers = ['Nombre', 'Apellido', 'Email', 'Teléfono', 'Dirección'];
  data = [
    [
      "Juan",
      "Pérez",
      "juan.perez@example.com",
      "1234567890",
      "Calle Falsa 123",

    ]
    ,
    [
      "Juan",
      "Pérez",
      "juan.perez@example.com",
      "1234567890",
      "Calle Falsa 123",
    ]
    ,
    [
      "Juan",
      "Pérez",
      "juan.perez@example.com",
      "1234567890",
      "Calle Falsa 123",
    ]
  ];


}
