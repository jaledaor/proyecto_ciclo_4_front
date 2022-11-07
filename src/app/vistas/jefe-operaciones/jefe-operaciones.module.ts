import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JefeOperacionesComponent } from './jefe-operaciones.component';
import { JefeOperacionesRoutingModule } from './jefe-operaciones-routing.mudule';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    JefeOperacionesComponent,
  ],
  imports: [
    CommonModule,
    JefeOperacionesRoutingModule,
    SharedModule
  ]
})
export class JefeOperacionesModule { }
