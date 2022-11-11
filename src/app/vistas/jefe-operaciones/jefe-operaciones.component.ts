import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JefeOperaciones } from 'src/app/interfaces/jefeoperaciones.interface';
import { JefeOperacionesService } from 'src/app/servicios/jefe-operaciones/jefe-operaciones.service';

@Component({
  selector: 'app-jefe-operaciones',
  templateUrl: './jefe-operaciones.component.html',
  styleUrls: ['./jefe-operaciones.component.scss']
})
export class JefeOperacionesComponent implements OnInit {

  jefeOperacionesInfo$!: Observable<JefeOperaciones>;

  JefeOperacionesId="";
  Nombre="";
  Apellido="";
  Telefono=0;
  Correo="";
  CiudadResidencia="";
  FechaNacimiento="";
  Contrasenia="";
  Rol="";

  constructor(private jefeOperacionesServicio: JefeOperacionesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const jefeOperaciones = this.route.snapshot.params;
    this.jefeOperacionesServicio.obtenerJefeOperacionesPorId(jefeOperaciones['jefeOperacionesId']); 
    this.jefeOperacionesInfo$ = this.jefeOperacionesServicio.obtenerInformacionJefeOperaciones();
  }

}
