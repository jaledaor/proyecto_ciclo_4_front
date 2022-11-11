import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../interfaces/cliente.interface';
import { BehaviorSubject } from 'rxjs';
import { Vehiculo } from 'src/app/interfaces/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private informacionCliente = new BehaviorSubject<Cliente>({
    Apellido: '',
    CiudadResidencia: '',
    ClienteId: '',
    Contrasenia: '',
    Correo: '',
    FechaNacimiento: new Date(),
    Nombre: '',
    Rol: '',
    Telefono: 0,
  });

  private vehiculosLista = new BehaviorSubject<Vehiculo[]>([]);

  private clientesLista = new BehaviorSubject<Cliente[]>([]);

  constructor(private http: HttpClient) {}

  obtenerClientes() {
    this.http.get<Cliente[]>('http://localhost:3000/clientes').subscribe({
      next: (clientes) => {
        this.clientesLista.next(clientes);
      }
    })
  }

  obtenerClientePorId(clienteId: string) {
    this.http.get<Cliente>(`http://localhost:3000/clientes/${clienteId}`).subscribe({
      next: (cliente) => {
        this.informacionCliente.next(cliente);
      }
    })
  }

  crearCliente(body: Cliente) {
    this.http.post('http://localhost:3000/clientes', body).subscribe({
      next: (res) => {
        alert('Registro exitoso');
        this.obtenerClientes();
      }
    })
  }

  editarClientePorId(body: Cliente) {
    this.http.put<any>(`http://localhost:3000/clientes/${body.ClienteId}`, body).subscribe({
      next: (res) => {
        alert('Cliente editado');
        this.obtenerClientePorId(body.ClienteId);
        this.obtenerClientes();
      }
    })
  }

  eliminarClientePorId(clienteId: string) {
    this.http.delete<any>(`http://localhost:3000/clientes/${clienteId}`).subscribe({
      next: (res) => {
        this.obtenerClientes();
      }
    })
  }

  obtenerVehiculosCliente(clienteId: string) {
      this.http.get<Vehiculo[]>(`http://localhost:3000/clientes/${clienteId}/vehiculos`).subscribe({
        next: (res) => {
          this.vehiculosLista.next(res);
        }
      })
  }

  obtenerInformacionCliente() {
    return this.informacionCliente.asObservable();
  }

  obtenerListaClientes() {
    return this.clientesLista.asObservable();
  }

  obtenerListaVehiculos() {
    return this.vehiculosLista.asObservable();
  }

}
