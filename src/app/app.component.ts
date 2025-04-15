import { AngularLibrarySoftTokModule } from 'node_modules/soft-tok-components/src/stories/components/model-library.module';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioSignalsComponent } from './components/formulario-signals/formulario-signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormularioSignalsComponent,AngularLibrarySoftTokModule],
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


  generarTabla(){
    console.log("generarTabla");
  }


}
