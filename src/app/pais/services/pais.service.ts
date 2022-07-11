import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PaisData } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v2'

  get httpParams () {
    return new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais ( termino: string): Observable<PaisData[]>{

    const url = `${this._apiUrl}/name/${termino}`

    return this.http.get<PaisData[]>(url, { params: this.httpParams });
  }

  buscarCapital ( termino: string ): Observable<PaisData[]>{
    const url = `${this._apiUrl}/capital/${termino}`

    return this.http.get<PaisData[]>(url, { params: this.httpParams });
  }

  verPaisCodigo ( codigo: string ): Observable<PaisData>{
    const url = `${this._apiUrl}/alpha/${codigo}`

    return this.http.get<PaisData>(url);
  }

  buscarRegion ( region: string): Observable<PaisData[]>{

    

    const url = `${this._apiUrl}/region/${region}`

    return this.http.get<PaisData[]>(url, { params: this.httpParams })
    .pipe(
      tap( console.log )
    )
  }

}
