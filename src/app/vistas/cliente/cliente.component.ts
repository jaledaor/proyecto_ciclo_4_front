import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  informacionCliente!: Cliente;
  clienteId!: Params;

  formulario = new FormGroup({
    ClienteId: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    Nombre: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    Apellido: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    Telefono: new FormControl(0, {nonNullable: true, validators: [Validators.required]}),
    Correo: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    CiudadResidencia: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    FechaNacimiento: new FormControl(new Date(), {nonNullable: true}),
    Contrasenia: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    Rol: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  })

  constructor(private clienteServicio: ClienteService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.params;
    this.clienteServicio.obtenerClientePorId(this.clienteId['clienteId']);
    this.clienteServicio.obtenerInformacionCliente().subscribe({
      next: (cliente) => {
        if(!cliente) return;
        this.informacionCliente = cliente;
        this.formulario.setValue(cliente);
      }
    })
  }

  editarCliente() {
    this.formulario.markAllAsTouched();
    this.formulario.markAsDirty();
    if (this.formulario.invalid) return;
    this.clienteServicio.editarClientePorId(this.formulario.value as Cliente);
  }

  test(){
    console.log('hola');
  }

}