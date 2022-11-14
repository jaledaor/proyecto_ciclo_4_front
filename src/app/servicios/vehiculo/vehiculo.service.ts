import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehiculo } from 'src/app/interfaces/vehiculo.interface';
import { ClienteService } from '../cliente/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  
  private informacionVehiculo = new BehaviorSubject<Vehiculo>({
    Cilindraje: 0,
    clienteId: '',
    Descripcion: '',
    Marca: '',
    Modelo: 0,
    NumeroPasajeros: 0,
    Pais: '',
    Placa: '',
    Tipo: '',
    VehiculoId: '',
    revisions: []
  });

  private vehiculosLista = new BehaviorSubject<Vehiculo[]>([]);

  constructor(private http: HttpClient, private clienteServicio: ClienteService) {}

  obtenerVehiculos() {
    this.http.get<Vehiculo[]>('http://localhost:3000/vehiculos').subscribe({
      next: (vehiculos) => {
        this.vehiculosLista.next(vehiculos);
      }
    })
  }

  obtenerVehiculoPorId(vehiculoId: string) {
    this.http.get<Vehiculo>(`http://localhost:3000/vehiculos/${vehiculoId}`).subscribe({
      next: (vehiculo) => {
        this.informacionVehiculo.next(vehiculo);
      }
    })
  }

  crearVehiculo(body: Vehiculo) {
    this.http.post('http://localhost:3000/vehiculos', body).subscribe({
      next: (res) => {
        alert('Registro exitoso');
        this.obtenerVehiculos();
        this.clienteServicio.obtenerVehiculosCliente(body.clienteId);
      }
    })
  }

  editarVehiculoPorId(body: Vehiculo) {
    this.http.put<any>(`http://localhost:3000/vehiculos/${body.VehiculoId}`, body).subscribe({
      next: (res) => {
        alert('Vehiculo editado');
        this.obtenerVehiculoPorId(body.VehiculoId);
        this.obtenerVehiculos();
      }
    })
  }

  eliminarVehiculoPorId(vehiculoId: string) {
    this.http.delete<any>(`http://localhost:3000/vehiculos/${vehiculoId}`).subscribe({
      next: (res) => {
        this.obtenerVehiculos();
      }
    })
  }

  obtenerInformacionVehiculo() {
    return this.informacionVehiculo.asObservable();
  }

  obtenerListaVehiculos() {
    return this.vehiculosLista.asObservable();
  }
}
