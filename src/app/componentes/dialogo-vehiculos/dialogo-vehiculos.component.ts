import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Vehiculo } from 'src/app/interfaces/vehiculo.interface';
import { ClienteComponent } from 'src/app/vistas/cliente/cliente.component';
import { CrudVehiculosComponent } from '../crud-vehiculos/crud-vehiculos.component';

@Component({
  selector: 'app-dialogo-vehiculos',
  templateUrl: './dialogo-vehiculos.component.html',
  styleUrls: ['./dialogo-vehiculos.component.scss']
})
export class DialogoVehiculosComponent implements OnInit {

  editar: boolean = true;

  formulario = new FormGroup({
    VehiculoId: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Placa: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Tipo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Marca: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Modelo: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
    NumeroPasajeros: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
    Cilindraje: new FormControl(0, { nonNullable: false }),
    Pais: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Descripcion: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    clienteId: new FormControl('', {nonNullable: true, validators: [Validators.required]})
  })

  constructor(public dialogRef: MatDialogRef<ClienteComponent, CrudVehiculosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    if(this.data.vehiculo !== undefined) {
      this.editar = false;
      this.formulario.setValue(this.data.vehiculo);
    } 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
