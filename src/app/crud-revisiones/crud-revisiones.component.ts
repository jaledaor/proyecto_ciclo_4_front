import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-revisiones',
  templateUrl: './crud-revisiones.component.html',
  styleUrls: ['./crud-revisiones.component.scss']
})
export class CrudRevisionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  RevisionId="";
  FechaEntrada="";
  FechaSalida="";
  Observaciones="";
  vehiculoId="";
  repuestoId="";
  mecanicoId="";
}
