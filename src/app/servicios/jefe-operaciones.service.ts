import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JefeOperaciones } from '../interfaces/jefeoperaciones.interface';

@Injectable({
  providedIn: 'root'
})
export class JefeOperacionesService {

  private informacionJefeOperaciones = new BehaviorSubject<JefeOperaciones>({
    Apellido: '',
    JefeOperacionesId: '',
    NivelEstudio: '',
    Contrasenia: '',
    Correo: '',
    FechaNacimiento: new Date(),
    Nombre: '',
    Rol: '',
    Telefono: 0
  });

  constructor(private http: HttpClient) { }

  obtenerJefeOperaciones() {
    this.http.get('http://localhost:3000/jefeoperaciones/count').subscribe({
      next: (count: any) => {
        console.log(count);
      }
    })
  }

  obtenerJefeOperacionesPorId(jefeOperacionesId: string) {
    this.http.get<JefeOperaciones>(`http://localhost:3000/jefeoperaciones/${jefeOperacionesId}`).subscribe({
      next: (jefeoperaciones) => {
        this.informacionJefeOperaciones.next(jefeoperaciones);
      }
    })
  }

  crearJefeOperaciones(body: JefeOperaciones) {
    this.http.post('http://localhost:3000/jefeoperaciones', body).subscribe({
      next: (res) => {
        alert('Registro exitoso');
      }
    })
  }

  editarJefeOperacionesPorId(body: JefeOperaciones) {
    this.http.put<any>(`http://localhost:3000/jefeoperaciones/${body.JefeOperacionesId}`, body).subscribe({
      next: (res) => {
        this.obtenerJefeOperacionesPorId(body.JefeOperacionesId);
      }
    })
  }

  eliminarJefeOperacionesPorId(jefeOperacionesId: string) {
    this.http.delete<any>(`http://localhost:3000/jefeoperaciones/${jefeOperacionesId}`).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

  obtenerInformacionJefeOperaciones() {
    return this.informacionJefeOperaciones.asObservable();
  }
}
