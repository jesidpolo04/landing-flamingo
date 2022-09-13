import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Aliados from '../modelos/Aliados';
import { Observable } from 'rxjs';
import { Autenticable } from './Autenticable';
import { AutenticacionService } from './autenticacion.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AliadosService extends Autenticable {
  private readonly urlBackend = environment.urlBackend;
  constructor(
    private http: HttpClient,
    servicioAutenticacion: AutenticacionService
  ) {
    super(servicioAutenticacion);
  }

  public obtenerAliados(): Observable<Aliados> {
    const endpoint = '/api/v1/aliados/listar';
    return this.http.get<Aliados>(`${this.urlBackend}${endpoint}`, {
      headers: this.obtenerCabeceraDeAutenticacion(),
    });
  }
}
