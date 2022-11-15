import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Repuesto } from 'src/app/interfaces/repuesto.interface';

@Injectable({
  providedIn: 'root'
})
export class RepuestoService {
  private informacionRepuesto = new BehaviorSubject<Repuesto>({
    Cantidad: 0,
    Nombre: '',
    RepuestoId: '',
    Tipo: ''
  });

  private repuestosLista = new BehaviorSubject<Repuesto[]>([]);

  constructor(private http: HttpClient) { }

  obtenerRepuestos() {
    this.http.get<Repuesto[]>('http://localhost:3000/repuestos').subscribe({
      next: (repuestos) => {
        this.repuestosLista.next(repuestos);
      }
    })
  }

  obtenerRepuestoPorId(repuestoId: string) {
    this.http.get<Repuesto>(`http://localhost:3000/repuestos/${repuestoId}`).subscribe({
      next: (repuesto) => {
        this.informacionRepuesto.next(repuesto);
      }
    })
  }

  crearRepuesto(body: Repuesto) {
    this.http.post('http://localhost:3000/repuestos', body).subscribe({
      next: (res) => {
        alert('Registro exitoso');
        this.obtenerRepuestos();
      }
    })
  }

  editarRepuestoPorId(body: Repuesto) {
    this.http.put(`http://localhost:3000/repuestos/${body.RepuestoId}`, body).subscribe({
      next: (res) => {
        alert('Repuesto editado');
        this.obtenerRepuestoPorId(body.RepuestoId);
        this.obtenerRepuestos();
      }
    })
  }

  eliminarRepuestoPorId(repuestoId: string) {
    this.http.delete(`http://localhost:3000/repuestos/${repuestoId}`).subscribe({
      next: (res) => {
        this.obtenerRepuestos();
      }
    })
  }

  obtenerInformacionRepuesto() {
    return this.informacionRepuesto.asObservable();
  }

  obtenerListaRepuestos() {
    return this.repuestosLista.asObservable();
  }
}
