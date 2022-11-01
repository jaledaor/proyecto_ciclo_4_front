import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-mecanicos',
  templateUrl: './crud-mecanicos.component.html',
  styleUrls: ['./crud-mecanicos.component.scss']
})
export class CrudMecanicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  MecanicoId="";
  Nombre="";
  Apellido="";
  Telefono=0;
  NivelEstudio="";
  Rol="";
}
