import { Component, OnInit } from '@angular/core';
import { Mecanico } from 'src/app/interfaces/mecanico';
import { ActivatedRoute, Params } from '@angular/router';
import { MecanicoService } from 'src/app/servicios/mecanico/mecanico.service';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.scss']
})
export class MecanicoComponent implements OnInit {

  informacionMecanico!: Mecanico;
  mecanicoId!: Params;

  constructor(private mecanicoServicio: MecanicoService ,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.mecanicoId = this.route.snapshot.params;
    this.mecanicoServicio.obtenerMecanicoPorId(this.mecanicoId['mecanicoId']);
    this.mecanicoServicio.obtenerInformacionMecanico().subscribe({
      next: (mecanico) => this.informacionMecanico = mecanico
    })
  }

}
