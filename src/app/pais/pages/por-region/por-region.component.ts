import { Component } from '@angular/core';

import { PaisData } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {


  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']

  regionActiva: string = ''

  paises: PaisData[] = []

  constructor( private paisService: PaisService ) { }

  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn-primary' : 'btn-outline-primary'
  }

  activarRegion( region:string ){

    if( region === this.regionActiva )return 
    this.regionActiva = region
    this.paisService.buscarRegion(region)
    .subscribe( paises => {
      this.paises = paises
    }, (err) => {
      this.paises = []
    })
  }

}
