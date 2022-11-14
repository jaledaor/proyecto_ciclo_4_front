import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Vehiculo } from 'src/app/interfaces/vehiculo.interface';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { VehiculoService } from 'src/app/servicios/vehiculo/vehiculo.service';
import { DialogoVehiculosComponent } from '../dialogo-vehiculos/dialogo-vehiculos.component';

@Component({
  selector: 'app-crud-vehiculos',
  templateUrl: './crud-vehiculos.component.html',
  styleUrls: ['./crud-vehiculos.component.scss']
})
export class CrudVehiculosComponent implements OnInit {

  vehiculos$!: Observable<Vehiculo[]>;
  clientes!: Cliente[];
  displayedColumns: string[] = ['Placa', 'Marca', 'Modelo', 'Cilindraje', 'Acciones'];
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

  constructor(private vehiculoServicio: VehiculoService, private clienteServicio: ClienteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.vehiculoServicio.obtenerVehiculos();
    this.vehiculos$ = this.vehiculoServicio.obtenerListaVehiculos();
    this.clienteServicio.obtenerClientes();
    this.clienteServicio.obtenerListaClientes().subscribe({
      next: (listaClientes) => {
        this.clientes = listaClientes;
      }
    })
  }


  abrirDialogo(vehiculo: Vehiculo = this.agregarVehiculo) {
    const dialogoRef = this.dialog.open(DialogoVehiculosComponent, {
      width: '50vw',
      data: {
        vehiculo: vehiculo,
        clientes: this.clientes
      },
    });
    dialogoRef.afterClosed().subscribe(resultado => {
      if(!resultado) return;
      if(resultado.editar) {
        this.vehiculoServicio.editarVehiculoPorId(resultado.formulario);
      } else this.vehiculoServicio.crearVehiculo(resultado.formulario)
    });
  }

  eliminarVehiculo(vehiculo: Vehiculo) {
    alert("Esta eliminando vehiculo");
    this.vehiculoServicio.eliminarVehiculoPorId(vehiculo.VehiculoId);
  }
}
