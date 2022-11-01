import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-vehiculos',
  templateUrl: './crud-vehiculos.component.html',
  styleUrls: ['./crud-vehiculos.component.scss']
})
export class CrudVehiculosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  VehiculoId="";
  Placa="";
  Tipo="";
  Marca="";
  Modelo=0;
  NumeroPasajeros=0;
  Cilindraje=0;
  Pais="";
  Descripcion="";
  ClienteId="";
}
