import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisData } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v2'

  constructor(private http: HttpClient) { }

  buscarPais ( termino: string): Observable<PaisData[]>{

    const url = `${this._apiUrl}/name/${termino}`

    return this.http.get<PaisData[]>(url);
  }

  buscarCapital ( termino: string ): Observable<PaisData[]>{
    const url = `${this._apiUrl}/capital/${termino}`

    return this.http.get<PaisData[]>(url);
  }

  verPaisCodigo ( codigo: string ): Observable<PaisData>{
    const url = `${this._apiUrl}/alpha/${codigo}`

    return this.http.get<PaisData>(url);
  }

}
