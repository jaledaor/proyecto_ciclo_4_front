import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Credenciales } from 'src/app/interfaces/credenciales.interface';
import { JefeOperaciones } from 'src/app/interfaces/jefeoperaciones.interface';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor(private http: HttpClient, private router: Router) { }

  ingreso(datos: Credenciales) {
    if(datos.Rol === 'Cliente') {
      this.http.get<Cliente[]>(`http://localhost:3000/clientes/`).subscribe({
        next: (clientes) => {
          const clienteExiste = clientes.find(c => c.ClienteId === datos.Id);
          if(clienteExiste) this.router.navigate(['cliente', clienteExiste.ClienteId]);
          else alert('cliente no existe');
        }
      })
    }
    if(datos.Rol === 'JefeOperaciones') {
      this.http.get<JefeOperaciones[]>(`http://localhost:3000/jefeoperaciones/`).subscribe({
        next: (jefeoperaciones) => {
          const clienteExiste = jefeoperaciones.find(j => j.JefeOperacionesId === datos.Id);
          if(clienteExiste) this.router.navigate(['jefe-operaciones', clienteExiste.JefeOperacionesId]);
          else alert('cliente no existe');
        }
      })
    }
  }
}
