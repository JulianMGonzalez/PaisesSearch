import { Component } from '@angular/core';
import { PaisData } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = ''
  hasError:boolean = false
  paises:PaisData[] = []

  paisesSugerencia : PaisData[] = []
  mostrarSugerencia: boolean = false

  constructor( private paisService: PaisService) { }

  buscar( event:string ){
    this.hasError = false
    this.termino = event
    this.paisService.buscarPais(event)
    .subscribe( paises => {
      this.paises = paises
    }, (err) => {
      this.paises = []
      this.hasError = true
    })
  }

  sugerencias( termino:string) {
    this.hasError = false
    this.termino = termino
    this.mostrarSugerencia = true
    this.paisService.buscarPais(termino)
    .subscribe( paises => this.paisesSugerencia = paises.splice(0, 10),
    (err) => this.paisesSugerencia = []
    )

  }

  buscarSugerido( termino: string){
    this.buscar( termino )
  }


}
