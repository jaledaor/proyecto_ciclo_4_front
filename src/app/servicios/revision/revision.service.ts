import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Revision } from 'src/app/interfaces/revision.interface';

@Injectable({
  providedIn: 'root'
})
export class RevisionService {

  private informacionRevision = new BehaviorSubject<Revision>({
    FechaEntrada: new Date(),
    FechaSalida: new Date(),
    Observaciones: '',
    RevisionId: ''
  });

  private revisionesLista = new BehaviorSubject<Revision[]>([]);

  constructor(private http: HttpClient) { }

  obtenerRevisiones() {
    this.http.get<Revision[]>('http://localhost:3000/revisions').subscribe({
      next: (revisiones) => {
        this.revisionesLista.next(revisiones);
      }
    })
  }

  obtenerRevisionPorId(revisionId: string) {
    this.http.get<Revision>(`http://localhost:3000/revisions/${revisionId}`).subscribe({
      next: (revision) => {
        this.informacionRevision.next(revision);
      }
    })
  }

  crearRevision(body: Revision) {
    this.http.post('http://localhost:3000/revisions', body).subscribe({
      next: (res) => {
        alert('Registro exitoso');
        this.obtenerRevisiones();
      }
    })
  }

  editarRevisionPorId(body: Revision) {
    this.http.put(`http://localhost:3000/revisions/${body.RevisionId}`, body).subscribe({
      next: (res) => {
        alert('Revision editada');
        this.obtenerRevisionPorId(body.RevisionId);
        this.obtenerRevisiones();
      }
    })
  }

  eliminarRevisionPorId(revisionId: string) {
    this.http.delete(`http://localhost:3000/revisions/${revisionId}`).subscribe({
      next: (res) => {
        this.obtenerRevisiones();
      }
    })
  }

  obtenerInformacionRevision() {
    return this.informacionRevision.asObservable();
  }

  obtenerListaRevision() {
    return this.revisionesLista.asObservable();
  }
}
