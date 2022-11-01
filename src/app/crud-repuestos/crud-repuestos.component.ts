import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-repuestos',
  templateUrl: './crud-repuestos.component.html',
  styleUrls: ['./crud-repuestos.component.scss']
})
export class CrudRepuestosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  RepuestoId="";
  Tipo="";
  Nombre="";
  Cantidad=0;
}
