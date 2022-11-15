import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudRepuestosComponent } from '../crud-repuestos/crud-repuestos.component';

@Component({
  selector: 'app-dialogo-repuesto',
  templateUrl: './dialogo-repuesto.component.html',
  styleUrls: ['./dialogo-repuesto.component.scss']
})
export class DialogoRepuestoComponent implements OnInit {

  editar: boolean = false;

  formulario = new FormGroup({
    RepuestoId: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Tipo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Cantidad: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
  })

  constructor(public dialogRef: MatDialogRef<CrudRepuestosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    if(this.data.repuesto.RepuestoId) {
      this.editar = true;
      this.formulario.patchValue(this.data.repuesto);
    } 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
