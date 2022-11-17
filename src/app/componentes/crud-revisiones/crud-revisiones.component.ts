import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, Observable } from 'rxjs';
import { Mecanico } from 'src/app/interfaces/mecanico';
import { Repuesto } from 'src/app/interfaces/repuesto.interface';
import { Revision } from 'src/app/interfaces/revision.interface';
import { Vehiculo } from 'src/app/interfaces/vehiculo.interface';
import { MecanicoService } from 'src/app/servicios/mecanico/mecanico.service';
import { RepuestoService } from 'src/app/servicios/repuesto/repuesto.service';
import { RevisionService } from 'src/app/servicios/revision/revision.service';
import { VehiculoService } from 'src/app/servicios/vehiculo/vehiculo.service';
import { DialogoRevisionComponent } from '../dialogo-revision/dialogo-revision.component';

@Component({
  selector: 'app-crud-revisiones',
  templateUrl: './crud-revisiones.component.html',
  styleUrls: ['./crud-revisiones.component.scss']
})
export class CrudRevisionesComponent implements OnInit {

  revisiones$!: Observable<Revision[]>;
  vehiculos!: Vehiculo[];
  repuestos!: Repuesto[];
  mecanicos!: Mecanico[];
  displayedColumns: string[] = ['RevisionId', 'FechaEntrada', 'FechaSalida', 'Observaciones', 'Acciones'];
  agregarRevision: Revision = {
    FechaEntrada: new Date(),
    Observaciones: '',
    RevisionId: '',
    // FechaSalida: new Date(),
  }

  constructor(
    private revisionServicio: RevisionService,
    private vehiculoServicio: VehiculoService,
    private repuestoServicio: RepuestoService,
    private mecanicoServicio: MecanicoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.revisionServicio.obtenerRevisiones();
    this.vehiculoServicio.obtenerVehiculos();
    this.mecanicoServicio.obtenerMecanicos();
    this.repuestoServicio.obtenerRepuestos();
    this.revisiones$ = this.revisionServicio.obtenerListaRevision();
    combineLatest([
      this.vehiculoServicio.obtenerListaVehiculos(),
      this.repuestoServicio.obtenerListaRepuestos(),
      this.mecanicoServicio.obtenerListaMecanicos(),
    ]).subscribe({
      next: ([vehiculos, repuestos, mecanicos]) => {
        this.vehiculos = vehiculos;
        this.repuestos = repuestos;
        this.mecanicos = mecanicos;
      }
    })
  }

  abrirDialogo(revision: Revision = this.agregarRevision) {
    const dialogoRef = this.dialog.open(DialogoRevisionComponent, {
      width: '65vw',
      data: {
        revision: revision,
        vehiculos: this.vehiculos,
        repuestos: this.repuestos,
        mecanicos: this.mecanicos
      },
    });
    dialogoRef.afterClosed().subscribe(resultado => {
      if (!resultado) return;
      if (resultado.editar) {
        this.revisionServicio.editarRevisionPorId(resultado.formulario);
      } else this.revisionServicio.crearRevision(resultado.formulario);
    });
  }

  eliminarRepuesto(revision: Revision) {
    alert(`Esta eliminando revision ${revision.RevisionId}`);
    this.revisionServicio.eliminarRevisionPorId(revision.RevisionId);
  }
}
