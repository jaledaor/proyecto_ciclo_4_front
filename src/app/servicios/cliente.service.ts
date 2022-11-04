import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente.interface';
import { BehaviorSubject } from 'rxjs';

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
    Telefono: 0
  });

  constructor(private http: HttpClient) {}

  obtenerClientes() {
    this.http.get('http://localhost:3000/clientes/count').subscribe({
      next: (count: any) => {
        console.log(count);
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

  crearClientePorId(body: any) {
    this.http.post('http://localhost:3000/clientes', body).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

  editarClientePorId(body: Cliente) {
    this.http.put<any>(`http://localhost:3000/clientes/${body.ClienteId}`, body).subscribe({
      next: (res) => {
        this.obtenerClientePorId(body.ClienteId);
      }
    })
  }

  eliminarClientePorId(clienteId: string) {
    this.http.delete<any>(`http://localhost:3000/clientes/${clienteId}`).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

  obtenerInformacionCliente() {
    return this.informacionCliente.asObservable();
  }

}
