import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jefe-operaciones',
  templateUrl: './jefe-operaciones.component.html',
  styleUrls: ['./jefe-operaciones.component.scss']
})
export class JefeOperacionesComponent implements OnInit {

  JefeOperacionesId="";
  Nombre="";
  Apellido="";
  Telefono=0;
  Correo="";
  CiudadResidencia="";
  FechaNacimiento="";
  Contrasenia="";
  Rol="";

  constructor() { }

  ngOnInit(): void {
  }

}
