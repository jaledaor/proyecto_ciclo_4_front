import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Mecanico } from 'src/app/interfaces/mecanico';
import { MecanicoService } from 'src/app/servicios/mecanico/mecanico.service';
import { DialogoMecanicoComponent } from '../dialogo-mecanico/dialogo-mecanico.component';

@Component({
  selector: 'app-crud-mecanicos',
  templateUrl: './crud-mecanicos.component.html',
  styleUrls: ['./crud-mecanicos.component.scss']
})
export class CrudMecanicosComponent implements OnInit {

  mecanicos$!: Observable<Mecanico[]>;
  displayedColumns: string[] = ['MecanicoId', 'Nombre', 'Nivel estudio', 'Telefono', 'Acciones'];
  agregarMecanico: Mecanico = {
    MecanicoId:"",
    Nombre:"",
    Apellido:"",
    Telefono:0,
    NivelEstudio:"",
    Rol:"",
    Contrasenia: '',
    Direccion: '',
    FechaNacimiento: new Date(),
  }

  constructor(private mecanicoServicio: MecanicoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.mecanicoServicio.obtenerMecanicos();
    this.mecanicos$ = this.mecanicoServicio.obtenerListaMecanicos();
  }

  abrirDialogo(mecanico: Mecanico = this.agregarMecanico) {
    const dialogoRef = this.dialog.open(DialogoMecanicoComponent, {
      width: '60vw',
      data: {
        mecanico: mecanico
      },
    });
    dialogoRef.afterClosed().subscribe(resultado => {
      if(!resultado) return;
      if(resultado.editar) {
        this.mecanicoServicio.editarMecanicoPorId(resultado.formulario);
      } else this.mecanicoServicio.crearMecanico(resultado.formulario)
    });
  }

  eliminarMecanico(mecanico: Mecanico) {
    alert("Esta eliminendo mecanico");
    this.mecanicoServicio.eliminarMecanicoPorId(mecanico.MecanicoId);
  }

}
