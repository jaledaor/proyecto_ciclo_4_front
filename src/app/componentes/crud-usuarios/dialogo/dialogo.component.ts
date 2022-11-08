import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { CrudUsuariosComponent } from '../crud-usuarios.component';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.scss']
})
export class DialogoComponent implements OnInit {

  editar: boolean = false;

  formulario = new FormGroup({
    ClienteId: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Apellido: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Telefono: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
    Correo: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    CiudadResidencia: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    FechaNacimiento: new FormControl(new Date(), { nonNullable: false }),
    Contrasenia: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Rol: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })

  constructor(public dialogRef: MatDialogRef<CrudUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente,) { }

  ngOnInit(): void {
    if(!this.data.ClienteId) this.editar = true;
    this.formulario.setValue(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
