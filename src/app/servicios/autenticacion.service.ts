import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespuestaAutorizacion } from '../modelos/autenticacion/RespuestaAutorizacion';
import { RespuestaRefrescarToken } from '../modelos/autenticacion/RespuestaRefrescarToken';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  public readonly claveToken = 'jwt';
  public readonly claveFechaExpiracion = 'expira';

  constructor(private clienteHttp: HttpClient) {}

  public autenticarse() {
    if (this.existeTokenValido()) {
      let token = String(localStorage.getItem(this.claveToken));
      this.refrescarToken(token).subscribe((respuesta) => {
        this.guardarTokenEnLocalStorage(respuesta.nuevoToken, respuesta.expira);
      });
    } else {
      this.obtenerToken().subscribe((respuesta) => {
        this.guardarTokenEnLocalStorage(respuesta.token, respuesta.expira);
      });
    }
  }

  private existeTokenValido(): boolean {
    let token = localStorage.getItem(this.claveToken);
    let fechaActual = new Date().getTime();
    let fechaExpiracion = Number(
      localStorage.getItem(this.claveFechaExpiracion)
    );
    if (fechaExpiracion < fechaActual && token) return true;
    return false;
  }

  private guardarTokenEnLocalStorage(token: string, expira: number) {
    let fechaExpiracion = new Date();
    fechaExpiracion.setSeconds(expira);
    localStorage.setItem(this.claveToken, token);
    localStorage.setItem(
      this.claveFechaExpiracion,
      fechaExpiracion.getTime().toString()
    );
  }

  private obtenerToken(): Observable<RespuestaAutorizacion> {
    const endpoint = '/api/v1/usuarios/logueo';
    const cuerpoPeticion = {
      usuario: 1002999476,
      contrasena: '$JM<3iIl',
    };
    return this.clienteHttp.post<RespuestaAutorizacion>(
      `${environment.urlBackend}${endpoint}`,
      cuerpoPeticion
    );
  }

  private refrescarToken(token: string): Observable<RespuestaRefrescarToken> {
    const endpoint = '/api/v1/token/refrescar';
    const cuerpoPeticion = {
      token: token,
    };
    return this.clienteHttp.post<RespuestaRefrescarToken>(
      `${environment.urlBackend}${endpoint}`,
      cuerpoPeticion
    );
  }
}
