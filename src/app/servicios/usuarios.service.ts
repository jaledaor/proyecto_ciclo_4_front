import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {}

  getUsuario() {
    this.http.get('http://localhost:3000/clientes/count').subscribe({
      next: (count: any) => {
        console.log(count);
      }
    })
  }

  getUsuarioPorId() {
    const id = 1130633379;
    this.http.get(`http://localhost:3000/clientes/1130633379`).subscribe({
      next: (cliente: any) => {
        console.log(cliente);
      }
    })
  }

  postUsuario(body: any) {
    this.http.post('http://localhost:3000/clientes', body).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

}
