import { Injectable } from '@angular/core';
import Categorias from '../modelos/Categorias';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autenticable } from './Autenticable';
import { AutenticacionService } from './autenticacion.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService extends Autenticable {
  private readonly urlBackend = environment.urlBackend;

  constructor(
    private http: HttpClient,
    servicioAutenticacion: AutenticacionService
  ) {
    super(servicioAutenticacion);
  }

  public obtenerCategoriasAliado(uuidAliado: string): Observable<Categorias> {
    const endpoint = `/api/v1/categorias/aliado/${uuidAliado}`;
    return this.http.get<Categorias>(`${this.urlBackend}${endpoint}`, {
      headers: this.obtenerCabeceraDeAutenticacion(),
    });
  }
}
