import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-jefe-operaciones',
  templateUrl: './crud-jefe-operaciones.component.html',
  styleUrls: ['./crud-jefe-operaciones.component.scss']
})
export class CrudJefeOperacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  JefeOperacionesId="";
  Nombre="";
  Apellido="";
  Telefono=0;
  Correo="";
  CiudadResidencia="";
  FechaNacimiento="";
  Contrasenia="";
  Rol="";
}
