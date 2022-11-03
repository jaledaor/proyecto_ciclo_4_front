import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';

interface Cliente {
  ClienteId: string;
  Nombre: string;
  Apellido: string;
  Telefono: number;
  Correo: string;
  CiudadResidencia: string;
  FechaNacimiento: string;
  Contrasenia: string;
  Rol: string;
}

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.scss',]
})


export class CrudUsuariosComponent implements OnInit {

  // ClienteId = "";
  // Nombre = "";
  // Apellido = "";
  // Telefono = 0;
  // Correo = "";
  // CiudadResidencia = "";
  // FechaNacimiento = "";
  // Contrasenia = "";
  // Rol = "";

  formulario = new FormGroup({
    ClienteId: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    Nombre: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    Apellido: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    Telefono: new FormControl(0, {nonNullable: true, validators: [Validators.required]}),
    Correo: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    CiudadResidencia: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    FechaNacimiento: new FormControl(new Date(), {nonNullable: false}),
    Contrasenia: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    Rol: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  })

  constructor(private usuarioServicio: UsuariosService) { }

  ngOnInit(): void {

  }

  submit() {
    this.formulario.markAllAsTouched();
    this.formulario.markAsDirty();
    if (this.formulario.invalid) return;
    this.usuarioServicio.postUsuario(this.formulario.value);
  }

}

