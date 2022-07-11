import { Component } from '@angular/core';
import { PaisData } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = ''
  hasError:boolean = false
  paises:PaisData[] = []

  constructor( private paisService: PaisService) { }

  buscar( event:string ){
    this.hasError = false
    this.termino = event
    this.paisService.buscarCapital(event)
    .subscribe( paises => {
      this.paises = paises
    }, (err) => {
      this.hasError = true
      this.paises = []
    })
  }


}
