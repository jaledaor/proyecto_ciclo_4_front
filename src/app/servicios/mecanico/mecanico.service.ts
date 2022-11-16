import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mecanico } from 'src/app/interfaces/mecanico';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {
  private informacionMecanico = new BehaviorSubject<Mecanico>({
    Apellido: '',
    MecanicoId: '',
    Contrasenia: '',
    FechaNacimiento: new Date(),
    Nombre: '',
    Rol: '',
    Telefono: 0,
    Direccion: '',
    NivelEstudio: ''
  });

  private mecanicosLista = new BehaviorSubject<Mecanico[]>([]);

  constructor(private http: HttpClient) {}

  obtenerMecanicos() {
    this.http.get<Mecanico[]>('http://localhost:3000/mecanicos').subscribe({
      next: (mecanicos) => {
        this.mecanicosLista.next(mecanicos);
      }
    })
  }

  obtenerMecanicoPorId(mecanicoId: string) {
    this.http.get<Mecanico>(`http://localhost:3000/mecanicos/${mecanicoId}`).subscribe({
      next: (mecanico) => {
        this.informacionMecanico.next(mecanico);
      }
    })
  }

  crearMecanico(body: Mecanico) {
    this.http.post('http://localhost:3000/mecanicos', body).subscribe({
      next: (res) => {
        alert('Registro exitoso');
        this.obtenerMecanicos();
      }
    })
  }

  editarMecanicoPorId(body: Mecanico) {
    this.http.put(`http://localhost:3000/mecanicos/${body.MecanicoId}`, body).subscribe({
      next: (res) => {
        alert('Mecanico editado');
        this.obtenerMecanicoPorId(body.MecanicoId);
        this.obtenerMecanicos();
      }
    })
  }

  eliminarMecanicoPorId(mecanicoId: string) {
    this.http.delete(`http://localhost:3000/mecanicos/${mecanicoId}`).subscribe({
      next: (res) => {
        this.obtenerMecanicos();
      }
    })
  }

  obtenerInformacionMecanico() {
    return this.informacionMecanico.asObservable();
  }

  obtenerListaMecanicos() {
    return this.mecanicosLista.asObservable();
  }
}
