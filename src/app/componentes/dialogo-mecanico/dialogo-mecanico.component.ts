import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudMecanicosComponent } from '../crud-mecanicos/crud-mecanicos.component';

@Component({
  selector: 'app-dialogo-mecanico',
  templateUrl: './dialogo-mecanico.component.html',
  styleUrls: ['./dialogo-mecanico.component.scss']
})
export class DialogoMecanicoComponent implements OnInit {

  editar: Boolean = false;

  formulario = new FormGroup({
    MecanicoId: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Apellido: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Telefono: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
    NivelEstudio: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    // CiudadResidencia: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    FechaNacimiento: new FormControl(new Date(), { nonNullable: false }),
    Contrasenia: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Rol: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Direccion: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })

  constructor(public dialogRef: MatDialogRef<CrudMecanicosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data.mecanico.MecanicoId) {
      this.editar = true;
      this.formulario.patchValue(this.data.mecanico);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
