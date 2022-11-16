import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Repuesto } from 'src/app/interfaces/repuesto.interface';
import { RepuestoService } from 'src/app/servicios/repuesto/repuesto.service';
import { DialogoRepuestoComponent } from '../dialogo-repuesto/dialogo-repuesto.component';

@Component({
  selector: 'app-crud-repuestos',
  templateUrl: './crud-repuestos.component.html',
  styleUrls: ['./crud-repuestos.component.scss']
})
export class CrudRepuestosComponent implements OnInit {

  repuestos$!: Observable<Repuesto[]>;
  displayedColumns: string[] = ['RespuestoId', 'Nombre', 'Tipo', 'Cantidad', 'Acciones'];
  agregarRepuesto: Repuesto = {
    Cantidad: 0,
    Nombre: '',
    RepuestoId: '',
    Tipo: ''
  }

  constructor(private repuestoServicio: RepuestoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.repuestoServicio.obtenerRepuestos();
    this.repuestos$ = this.repuestoServicio.obtenerListaRepuestos();
  }

  abrirDialogo(repuesto: Repuesto = this.agregarRepuesto) {
    const dialogoRef = this.dialog.open(DialogoRepuestoComponent, {
      width: '60vw',
      data: {
        repuesto: repuesto
      },
    });
    dialogoRef.afterClosed().subscribe(resultado => {
      if(!resultado) return;
      if(resultado.editar) {
        this.repuestoServicio.editarRepuestoPorId(resultado.formulario);
      } else this.repuestoServicio.crearRepuesto(resultado.formulario);
    });
  }

  eliminarRepuesto(repuesto: Repuesto) {
    alert(`Esta eliminando repuesto ${repuesto.Nombre}`);
    this.repuestoServicio.eliminarRepuestoPorId(repuesto.RepuestoId);
  }
}
