import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mecanico } from 'src/app/interfaces/mecanico';
import { Repuesto } from 'src/app/interfaces/repuesto.interface';
import { Vehiculo } from 'src/app/interfaces/vehiculo.interface';
import { ClienteComponent } from 'src/app/vistas/cliente/cliente.component';
import { CrudRevisionesComponent } from '../crud-revisiones/crud-revisiones.component';

@Component({
  selector: 'app-dialogo-revision',
  templateUrl: './dialogo-revision.component.html',
  styleUrls: ['./dialogo-revision.component.scss']
})
export class DialogoRevisionComponent implements OnInit {

  editar: boolean = false;
  desdeCliente: boolean = false;
  vehiculos!: Vehiculo[];
  repuestos!: Repuesto[];
  mecanicos!: Mecanico[];

  formulario = new FormGroup({
    RevisionId: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    FechaEntrada: new FormControl(new Date(), { nonNullable: true, validators: [Validators.required] }),
    FechaSalida: new FormControl('', { nonNullable: true }),
    Observaciones: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    vehiculoId: new FormControl('', { nonNullable: true }),
    repuestoId: new FormControl('', { nonNullable: true }),
    mecanicoId: new FormControl('', {nonNullable: true})
  })

  constructor(public dialogRef: MatDialogRef<CrudRevisionesComponent, ClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    if(this.data.revision.RevisionId) {
      this.editar = true;
      this.formulario.patchValue(this.data.revision);
    }
    this.vehiculos = this.data.vehiculos;
    this.repuestos = this.data.repuestos;
    this.mecanicos = this.data.mecanicos;
    this.desdeCliente = this.data.cliente;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
