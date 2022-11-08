import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credenciales } from 'src/app/interfaces/credenciales.interface';
import { IngresoService } from 'src/app/servicios/ingreso/ingreso.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  formulario = new FormGroup({
    Id: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Rol: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Contrasenia: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })

  constructor(private ingreso: IngresoService) { }

  ngOnInit(): void {
  }

  ingresar() {
    this.formulario.markAllAsTouched();
    this.formulario.markAsDirty();
    if (this.formulario.invalid) return;
    this.ingreso.ingreso(this.formulario.value as Credenciales);
  }

}
