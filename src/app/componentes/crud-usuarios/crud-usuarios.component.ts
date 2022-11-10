import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from '../../servicios/cliente/cliente.service';
import { DialogoComponent } from './dialogo/dialogo.component';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.scss',]
})

export class CrudUsuariosComponent implements OnInit {

  clientes!: Cliente[];
  displayedColumns: string[] = ['ClienteId', 'Nombre', 'Correo', 'Telefono', 'Acciones'];
  agregarCliente: Cliente = {
    Apellido: '',
    CiudadResidencia: '',
    ClienteId: '',
    Contrasenia: '',
    Correo: '',
    FechaNacimiento: new Date(),
    Nombre: '',
    Rol: '',
    Telefono: 0
  }

  // formulario = new FormGroup({
  //   ClienteId: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  //   Nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  //   Apellido: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  //   Telefono: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
  //   Correo: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
  //   CiudadResidencia: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  //   FechaNacimiento: new FormControl(new Date(), { nonNullable: false }),
  //   Contrasenia: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  //   Rol: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  // })

  constructor(private clienteServicio: ClienteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.clienteServicio.obtenerClientes();
    this.clienteServicio.obtenerListaClientes().subscribe({
      next: (clientes) => {
        this.clientes = clientes;
      }
    })
  }

  // submit() {
  //   this.formulario.markAllAsTouched();
  //   this.formulario.markAsDirty();
  //   if (this.formulario.invalid) return;
  //   this.clienteServicio.crearCliente(this.formulario.value as Cliente);
  // }

  abrirDialogo(cliente: Cliente = this.agregarCliente) {
    const dialogoRef = this.dialog.open(DialogoComponent, {
      width: 'max-content',
      data: cliente,
    });
    dialogoRef.afterClosed().subscribe(resultado => {
      if(!resultado) return;
      if(resultado.editar) {
        this.clienteServicio.editarClientePorId(resultado.formulario);
      } else this.clienteServicio.crearCliente(resultado.formulario)
    });
  }

  eliminarCliente(cliente: Cliente) {
    alert("Esta eliminendo cliente");
    this.clienteServicio.eliminarClientePorId(cliente.ClienteId);
  }

}
