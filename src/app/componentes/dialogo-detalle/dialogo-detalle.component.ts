import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehiculo } from 'src/app/interfaces/vehiculo.interface';
import { CrudVehiculosComponent } from '../crud-vehiculos/crud-vehiculos.component';

@Component({
  selector: 'app-dialogo-detalle',
  templateUrl: './dialogo-detalle.component.html',
  styleUrls: ['./dialogo-detalle.component.scss']
})
export class DialogoDetalleComponent implements OnInit {

  vehiculo!: Vehiculo;

  constructor(public dialogRef: MatDialogRef<CrudVehiculosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data.vehiculo) this.vehiculo = this.data.vehiculo;
  }

}
