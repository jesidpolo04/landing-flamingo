import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from './autenticacion.service';

export abstract class Autenticable {
  public constructor(private servicioAutenticacion: AutenticacionService) {}

  protected obtenerCabeceraDeAutenticacion(): HttpHeaders {
    const token = String(
      localStorage.getItem(this.servicioAutenticacion.claveToken)
    );

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
