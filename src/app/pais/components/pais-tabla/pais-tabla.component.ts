import { Component, Input } from '@angular/core';
import { PaisData } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent  {

  @Input() paises: PaisData[] = []

  constructor() { }

  

}
