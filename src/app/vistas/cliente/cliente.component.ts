import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogoRevisionComponent } from 'src/app/componentes/dialogo-revision/dialogo-revision.component';
import { DialogoVehiculosComponent } from 'src/app/componentes/dialogo-vehiculos/dialogo-vehiculos.component';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Revision } from 'src/app/interfaces/revision.interface';
import { Vehiculo } from 'src/app/interfaces/vehiculo.interface';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { RevisionService } from 'src/app/servicios/revision/revision.service';
import { VehiculoService } from 'src/app/servicios/vehiculo/vehiculo.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  informacionCliente!: Cliente;
  clienteId!: Params;
  vehiculos$!: Observable<Vehiculo[]>;
  vehiculos!: Vehiculo[];
  displayedColumns: string[] = ['Placa', 'Marca', 'Modelo', 'Cilindraje'];
  agregarVehiculo: Vehiculo = {
    VehiculoId: "",
    Placa: "",
    Tipo: "",
    Marca: "",
    Modelo: 0,
    NumeroPasajeros: 0,
    Cilindraje: 0,
    Pais: "",
    Descripcion: "",
    clienteId: "",
  }
  revision: Revision = {
    FechaEntrada: new Date(),
    Observaciones: '',
    RevisionId: '',
  }

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

  constructor(
    private clienteServicio: ClienteService,
    private vehiculoServicio: VehiculoService,
    private revisionServicio: RevisionService,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
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
    this.clienteServicio.obtenerVehiculosCliente(this.clienteId['clienteId']);
    this.vehiculos$ = this.clienteServicio.obtenerListaVehiculos()
    this.clienteServicio.obtenerListaVehiculos().subscribe({
      next: (vehiculos) => {
        this.vehiculos = vehiculos
      }
    })
  }

  editarCliente() {
    this.formulario.markAllAsTouched();
    this.formulario.markAsDirty();
    if (this.formulario.invalid) return;
    this.clienteServicio.editarClientePorId(this.formulario.value as Cliente);
  }

  abrirDialogo(vehiculo: Vehiculo = this.agregarVehiculo) {
    const dialogoRef = this.dialog.open(DialogoVehiculosComponent, {
      width: '50vw',
      data: {
        vehiculo: vehiculo,
        clientes: this.informacionCliente
      },
    });
    dialogoRef.afterClosed().subscribe(resultado => {
      if(!resultado) return;
      if(resultado.editar) {
        this.vehiculoServicio.editarVehiculoPorId(resultado.formulario);
      } else this.vehiculoServicio.crearVehiculo(resultado.formulario)
    });
  }

  abrirDialogoRevision() {
    const dialogoRef = this.dialog.open(DialogoRevisionComponent, {
      width: '65vw',
      data: {
        revision: this.revision,
        vehiculos: this.vehiculos,
        cliente: true
      },
    });
    dialogoRef.afterClosed().subscribe(resultado => {
      if (!resultado) return;
      this.revisionServicio.crearRevision(resultado.formulario);
    });
  }
}
